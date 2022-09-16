export const useFormErrors = () => {
  const validate = (values, file) => {
    const errors = {};
    if (!values.position) {
      errors.position = "Position is Required!";
    }
    if (!values.location) {
      errors.location = "Location is Required!";
    }
    if (!values.company) {
      errors.company = "Company is Required!";
    }
    if (!values.type) {
      errors.type = "Job type is Required!";
    }
    if (!file) {
      errors.logo = "an Image is Required!";
    }
    if (!values.tags) {
      errors.tags = "Tag is Required!";
    } else if (values.tags.split(",").length > 4) {
      errors.tags = "Tags cannot exceed 4 tags";
    }
    if (!values.description) {
      errors.description = "Description is Required!";
    }

    return errors;
  };

  const validateApplicant = (values, file) => {
    const errors = {};
    if (!values.fullname) {
      errors.fullname = "Fullname is Required!";
    }
    if (!values.linkedinUrl) {
      errors.linkedinUrl = "linkedin Url is Required!";
    }
    if (!file) {
      errors.resume = "Resume Pdf is Required!";
    } else if (file.type != "application/pdf") {
      errors.resume = "Only Pdf Files are Accepted!";
    }

    return errors;
  };

  return { validate, validateApplicant };
};
