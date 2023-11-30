

export const validateForm = (formData) => {
    const errors = {};
  
    if (!formData.first_name || formData.first_name === "") {
      errors.first_name = "First Name is required.";
    }
  
    if (!formData.middle_name || formData.middle_name === "") {
      errors.middle_name = "Middle Name is required.";
    }
  
    if (!formData.last_name || formData.last_name === "") {
      errors.last_name = "Last Name is required.";
    }
  
    if (!formData.qualification || formData.qualification === "") {
      errors.qualification = "Qualification is required.";
    }
  
    if (!formData.department || formData.department === "") {
      errors.department = "department is required.";
    }
    if (!formData.position || formData.position === "") {
      errors.position = "Position is required.";
    }
  
    if (!formData.experience || formData.experience === "") {
        errors.experience = "Experience is required.";
      }
  
    if (!formData.location || formData.location === "") {
      errors.location = "Location is required.";
    }
  
    if (!formData.expectation || formData.expectation === "") {
      errors.expectation = "Expectations is required.";
    }
  
    if (!formData.date || formData.date === "") {
      errors.date = "Date of Birth is required.";
    }
    if (!formData.qualification || formData.qualification === "") {
      errors.qualification = "qualification is required.";
    }
  
    if (!formData.department || formData.department === "") {
      errors.department = "Department is required.";
    }
    if (!formData.notice_period || formData.notice_period  === "") {
      errors.notice_period  = "notice period  is required.";
    }
    // Add additional validations for other fields...
  
    return errors;
  };
  