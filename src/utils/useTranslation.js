import { useIntl } from 'react-intl';

const useTranslation = () => {
  const { formatMessage } = useIntl();

  // A simple function to retrieve messages by ID, or fall back to the ID if missing
  const t = (id, values = {}) => formatMessage({ id }, values);

  return { t };
};

export default useTranslation;
