/**
 * Application-wide constants
 */

export const APP_CONFIG = {
    MAX_IMAGES: 10,
    MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
    ACCEPTED_IMAGE_TYPES: ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'],
    COPY_FEEDBACK_DURATION: 2000, // 2 seconds
} as const;

export const ERROR_MESSAGES = {
    MAX_IMAGES_EXCEEDED: (max: number) => `You can only upload up to ${max} images.`,
    FILE_TOO_LARGE: (maxSize: number) => `File size exceeds ${maxSize / 1024 / 1024}MB limit.`,
    INVALID_FILE_TYPE: 'Only PNG, JPG, and WebP images are supported.',
    API_KEY_MISSING: 'API Key is missing. Please check your environment configuration.',
    PROCESSING_FAILED: 'Failed to process images with AI.',
    NO_ROOT_ELEMENT: 'Could not find root element to mount to',
} as const;

export const AI_CONFIG = {
    MODEL: 'gemini-1.5-pro',
    TEMPERATURE: 0.2,
    TOP_P: 0.95,
} as const;
