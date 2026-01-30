/**
 * Custom React hooks for the application
 */

import { useEffect } from 'react';

/**
 * Hook to cleanup object URLs when component unmounts
 * Prevents memory leaks from blob URLs
 */
export const useCleanupObjectURLs = (urls: string[]) => {
    useEffect(() => {
        return () => {
            urls.forEach(url => {
                if (url.startsWith('blob:')) {
                    URL.revokeObjectURL(url);
                }
            });
        };
    }, [urls]);
};

/**
 * Hook to handle keyboard shortcuts
 */
export const useKeyboardShortcut = (
    key: string,
    callback: () => void,
    modifiers?: { ctrl?: boolean; shift?: boolean; alt?: boolean }
) => {
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            const ctrlMatch = modifiers?.ctrl ? event.ctrlKey || event.metaKey : true;
            const shiftMatch = modifiers?.shift ? event.shiftKey : true;
            const altMatch = modifiers?.alt ? event.altKey : true;

            if (event.key === key && ctrlMatch && shiftMatch && altMatch) {
                event.preventDefault();
                callback();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [key, callback, modifiers]);
};
