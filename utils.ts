/**
 * Utility functions for file handling and validation
 */

import { APP_CONFIG, ERROR_MESSAGES } from './constants';

/**
 * Validates if a file meets the application requirements
 */
export const validateFile = (file: File): { valid: boolean; error?: string } => {
    // Check file type
    if (!APP_CONFIG.ACCEPTED_IMAGE_TYPES.includes(file.type as any)) {
        return { valid: false, error: ERROR_MESSAGES.INVALID_FILE_TYPE };
    }

    // Check file size
    if (file.size > APP_CONFIG.MAX_FILE_SIZE) {
        return { valid: false, error: ERROR_MESSAGES.FILE_TOO_LARGE(APP_CONFIG.MAX_FILE_SIZE) };
    }

    return { valid: true };
};

/**
 * Converts a File to base64 string
 */
export const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const base64String = reader.result as string;
            // Remove the prefix (e.g., "data:image/png;base64,")
            resolve(base64String.split(',')[1]);
        };
        reader.onerror = (error) => reject(error);
    });
};

/**
 * Generates a unique ID for images
 */
export const generateUniqueId = (): string => {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};

/**
 * Cleans LaTeX code by removing markdown code block wrappers
 */
export const cleanLatexCode = (text: string): string => {
    return text.replace(/^```latex\n?/, '').replace(/\n?```$/, '').trim();
};
