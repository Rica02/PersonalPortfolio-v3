import { useContext, useEffect, useRef } from 'react';
import { NavContext } from '../context/NavContext';
import { useOnScreen } from './useOnScreen';

// Get value of current section ID
export const useNav = (navLinkId) => {
  const ref = useRef(null);
  const { setActiveLinkId } = useContext(NavContext);

  // Check if section ID is currently in view
  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      setActiveLinkId(navLinkId);
    }
  }, [isOnScreen, setActiveLinkId, navLinkId]);

  return ref;
};
