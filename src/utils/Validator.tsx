import * as yup from 'yup';

export const validate = async (data: any, type: string = '') => {
  var schema: any = {};
  switch (type) {
    case 'change_password':
      schema = {
        old_password: yup.string().required(), // CHANGE PASSWORD
        new_password: yup.string().required().min(8),
        confirm_password: yup.string().test(
          'passwords-match',
          'Passwords must match',
          (value) => data.new_password === value),
      };
      break;

    case 'support':
      schema = {
        subject: yup.string().required().max(100),
        message: yup.string().required().max(255),
      };
      break;

    default:
      schema = {
        name: yup.string().required().min(2).max(50),
        fname: yup.string().required().min(2).max(50),
        lname: yup.string().required().min(2).max(50),
        email: yup.string().email().required().max(100),
        address: yup.string().required().max(255),
        query: yup.string().required().max(255),
        phone: yup.string().required().min(11).max(15),
        password: yup.string().required().min(8).max(100),
        confirm_password: yup.string().required().min(8).max(100).test(
          'passwords-match',
          'Passwords must match',
          value => data.password === value,
        ),
        gender: yup.string().required(),
        dob: yup.string().required(),


        old_password: yup.string().required(), // CHANGE PASSWORD
        new_password: yup.string().required().min(8),
        password_confirmation: yup.string().required().min(8).max(100).test(
          'passwords-match',
          'New password and confirm password must match',
          value => data.new_password === value,
        ),

        // SERVICES
        lejRe: yup
          .number()
          .typeError('This field is required')
          .required()
          .min(1),
        mbk5e: yup
          .number()
          .typeError('This field is required')
          .required()
          .min(1),
        nel5a: yup
          .number()
          .typeError('This field is required')
          .required()
          .min(1),
      };
      break;
  }

  const errors: any = {};
  Object.keys(data).forEach((key: string) => {
    try {
      schema[key as any].validateSync(data[key as any]);
    } catch ({ errors: e }) {
      if (e) {
        errors[key as any] = e?.pop();
      }
    }
  });

  if (!Object.keys(errors).length) {
    return false;
  }

  return errors;
};
