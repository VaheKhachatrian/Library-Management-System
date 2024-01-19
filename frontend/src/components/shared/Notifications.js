import { NotificationManager } from 'react-notifications';

const createNotification = (type) => () => {
  switch (type) {
    case 'success':
      NotificationManager.success('Success message', 'Title here');
      break;
    case 'warning':
      NotificationManager.warning(
        'Warning message',
        'Close after 3000ms',
        3000,
      );
      break;
    case 'error':
      NotificationManager.error('Error message', 'Click me!', 5000, () => {
        // alert('callback');  Write your custom alert message
      });
      break;
    default:
      break;
  }
};

export default createNotification;
