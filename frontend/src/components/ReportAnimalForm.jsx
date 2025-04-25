import { useState, useRef, useCallback } from 'react';
import { Camera, Upload, X, RotateCcw } from 'lucide-react';
import { Form, Card, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import Webcam from 'react-webcam';

const ReportAnimalForm = () => {
  const [formData, setFormData] = useState({
    injuryScale: 1,
    description: '',
    image: null,
    animalType: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showWebcam, setShowWebcam] = useState(false);
  const fileInputRef = useRef(null);
  const webcamRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setFormData(prev => ({
      ...prev,
      image: imageSrc
    }));
    setShowWebcam(false);
  }, [webcamRef]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnimalTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      animalType: type
    }));
    if (errors.animalType) {
      setErrors(prev => ({
        ...prev,
        animalType: ''
      }));
    }
  };

  const openFileUpload = () => {
    fileInputRef.current.click();
  };

  const openWebcam = () => {
    setShowWebcam(true);
  };

  const closeWebcam = () => {
    setShowWebcam(false);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.animalType) {
      newErrors.animalType = 'Please select an animal type';
    }
    if (!formData.description) {
      newErrors.description = 'Please provide a description';
    }
    if (formData.phoneNumber && !/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Here you would typically make an API call
      console.log('Form data:', formData);
      alert('Alert sent to nearby NGOs!');
      // Reset form after successful submission
      setFormData({
        injuryScale: 1,
        description: '',
        image: null,
        animalType: '',
        phoneNumber: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container fluid className="py-3 py-md-5 px-3 px-md-4">
      <Row className="justify-content-center">
        <Col xs={12} sm={11} md={10} lg={8} xl={6}>
          <Card className="shadow-lg border-0">
            {/* Header */}
            <Card.Header className="bg-danger text-white text-center py-3">
              <h2 className="mb-0 fw-bold fs-3 fs-md-2">Report An Animal</h2>
            </Card.Header>

            {/* Form Content */}
            <Card.Body className="p-3 p-md-4">
              {/* Image Upload Section */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold fs-5 text-primary">Image</Form.Label>
                <div className="d-flex flex-column gap-3">
                  {showWebcam ? (
                    <Card className="border-0 shadow-sm">
                      <Card.Body className="p-0 position-relative">
                        <Webcam
                          audio={false}
                          ref={webcamRef}
                          screenshotFormat="image/jpeg"
                          className="w-100 rounded-top"
                          videoConstraints={{
                            facingMode: "environment"
                          }}
                        />
                        <div className="position-absolute top-0 end-0 m-2">
                          <Button
                            variant="danger"
                            size="sm"
                            className="rounded-circle"
                            onClick={closeWebcam}
                          >
                            <X size={20} />
                          </Button>
                        </div>
                        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
                          <Button
                            variant="primary"
                            size="lg"
                            className="rounded-pill shadow-sm px-4"
                            onClick={capture}
                          >
                            <Camera size={20} className="me-2" />
                            Capture Photo
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  ) : (
                    <>
                      <Card className="border-0 shadow-sm">
                        <Card.Body className="p-0">
                          <div 
                            className="d-flex align-items-center justify-content-center border rounded p-3 p-md-4 bg-light"
                            style={{ minHeight: '200px', height: '100%' }}
                          >
                            {formData.image ? (
                              <div className="position-relative w-100 h-100">
                                <img 
                                  src={formData.image} 
                                  alt="Animal" 
                                  className="img-fluid h-100 w-100" 
                                  style={{ objectFit: 'contain' }} 
                                />
                                <Button
                                  variant="danger"
                                  size="sm"
                                  className="position-absolute top-0 end-0 m-2 rounded-circle"
                                  onClick={() => setFormData(prev => ({ ...prev, image: null }))}
                                >
                                  <X size={16} />
                                </Button>
                              </div>
                            ) : (
                              <div className="text-center">
                                <Camera size={48} className="text-secondary mb-3" />
                                <p className="text-muted mb-0 fs-5">Click to upload or take a photo</p>
                              </div>
                            )}
                          </div>
                        </Card.Body>
                      </Card>
                      
                      <div className="d-flex flex-column flex-sm-row gap-2 gap-sm-3">
                        <Button
                          variant="outline-primary"
                          className="flex-grow-1 py-2"
                          onClick={openFileUpload}
                        >
                          <Upload size={18} className="me-2" />
                          Upload File
                        </Button>
                        <Button
                          variant="outline-success"
                          className="flex-grow-1 py-2"
                          onClick={openWebcam}
                        >
                          <Camera size={18} className="me-2" />
                          Take Photo
                        </Button>
                      </div>
                      
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="d-none"
                      />
                    </>
                  )}
                </div>
              </Form.Group>

              {/* Animal Type Section */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold fs-5 text-primary">Animal Type</Form.Label>
                <div className="d-flex flex-wrap gap-2">
                  {['Cat', 'Dog', 'Bird', 'Cow'].map(type => (
                    <Button
                      key={type}
                      type="button"
                      variant={formData.animalType === type ? 'primary' : 'outline-primary'}
                      className="rounded-pill px-3 px-sm-4"
                      onClick={() => handleAnimalTypeChange(type)}
                    >
                      {type}
                    </Button>
                  ))}
                </div>
                {errors.animalType && (
                  <Alert variant="danger" className="mt-2 py-2">
                    {errors.animalType}
                  </Alert>
                )}
              </Form.Group>

              {/* Injury Scale */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold fs-5 text-primary">
                  On a Scale of 5 How Hurt Animal IS:
                </Form.Label>
                <Form.Range
                  name="injuryScale"
                  min="1"
                  max="5"
                  value={formData.injuryScale}
                  onChange={handleChange}
                  className="custom-range"
                />
                <div className="d-flex justify-content-between text-muted mt-1 small">
                  <span>1 (Minor)</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5 (Critical)</span>
                </div>
              </Form.Group>

              {/* Phone Number (Optional) */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold fs-5 text-primary">
                  Phone No. <span className="text-muted">(Optional)</span>
                </Form.Label>
                <Form.Control
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  isInvalid={!!errors.phoneNumber}
                  className="py-2"
                />
                {errors.phoneNumber && (
                  <Alert variant="danger" className="mt-2 py-2">
                    {errors.phoneNumber}
                  </Alert>
                )}
              </Form.Group>

              {/* Description */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold fs-5 text-primary">Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  style={{ height: '120px' }}
                  placeholder="Describe the animal's condition and location..."
                  isInvalid={!!errors.description}
                  className="py-2"
                />
                {errors.description && (
                  <Alert variant="danger" className="mt-2 py-2">
                    {errors.description}
                  </Alert>
                )}
              </Form.Group>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="warning"
                className="w-100 py-3 fw-bold text-uppercase shadow-sm"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Submitting...
                  </>
                ) : (
                  'ALERT NEARBY NGOs'
                )}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ReportAnimalForm;