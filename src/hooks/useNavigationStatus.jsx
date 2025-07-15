import { useNavigation } from 'react-router-dom';

export function useNavigationStatus() {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';
  const isSubmitting = navigation.state === 'submitting';

  return {
    isLoading,
    isSubmitting,
    isBusy: isLoading || isSubmitting
  };
}
