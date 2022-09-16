export const schema = {
  models: {
    ApplicantsModel: {
      name: "ApplicantsModel",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        jobId: {
          name: "jobId",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        applicantMail: {
          name: "applicantMail",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        linkedIn: {
          name: "linkedIn",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        resumePdf: {
          name: "resumePdf",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        fullname: {
          name: "fullname",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "ApplicantsModels",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    JobsModel: {
      name: "JobsModel",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        owner: {
          name: "owner",
          isArray: false,
          type: "AWSEmail",
          isRequired: true,
          attributes: [],
        },
        position: {
          name: "position",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        location: {
          name: "location",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        type: {
          name: "type",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        company: {
          name: "company",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        tags: {
          name: "tags",
          isArray: true,
          type: "String",
          isRequired: true,
          attributes: [],
          isArrayNullable: false,
        },
        logo: {
          name: "logo",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        description: {
          name: "description",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "JobsModels",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
  },
  enums: {},
  nonModels: {},
  version: "d1778e91bbf343581ab92604ef793457",
};
