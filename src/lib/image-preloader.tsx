// Define CRITICAL images that need to be preloaded for fast experience
const CRITICAL_IMAGES = [
  // Hero section images (most important)
  "/hero.svg",
  "/zero.svg",
  "/sub-hero.svg",
  "/mask.svg",
  "/loader-hero.svg",
];

// Define secondary images that can load progressively
const SECONDARY_IMAGES = [
  // Feature section images
  "/1.svg",
  "/2.svg",
  "/3.svg",
  "/4.svg",
  "/eoflow.svg",
  "/33.svg",

  // Testimonial images
  "/user-1.svg",
  "/quote.svg",

  // CTA images
  "/cta.svg",

  // FAQ images
  "/faq.svg",

  // Footer social icons
  "/discord.svg",
  "/x.svg",
  "/telegram.svg",
];

// Combine all images for full preloading
const APP_IMAGES = [...CRITICAL_IMAGES, ...SECONDARY_IMAGES];

/**
 * Preload only CRITICAL images for ULTRA FAST initial load
 * @param onProgress - Callback function to report progress (0-100)
 * @returns {Promise<boolean>} - Resolves when critical images are loaded
 */
export const preloadCriticalImages = async (
  onProgress?: (progress: number) => void
): Promise<boolean> => {
  console.log(
    `⚡ ULTRA FAST preloading ${CRITICAL_IMAGES.length} critical images...`
  );

  try {
    let loadedCount = 0;
    const total = CRITICAL_IMAGES.length;

    const report = () => {
      if (onProgress) {
        const percent = Math.round((loadedCount / total) * 100);
        onProgress(percent);
      }
    };

    // Optimize connections for faster loading
    optimizeConnections();

    // ULTRA FAST parallel loading with immediate progress updates
    const loadPromises = CRITICAL_IMAGES.map((src, index) => {
      return preloadSingleImageUltraFast(src)
        .then(() => {
          loadedCount += 1;
          report();
          console.log(`⚡ Critical loaded ${index + 1}/${total}: ${src}`);
        })
        .catch((err) => {
          console.error(`❌ Failed: ${src}`, err);
          loadedCount += 1;
          report();
        });
    });

    // Load critical images simultaneously with maximum concurrency
    await Promise.allSettled(loadPromises);

    report();
    return true;
  } catch (error) {
    console.error("❌ Critical preloading failed:", error);
    return false;
  }
};

/**
 * Preload all images for the entire app with ULTRA FAST loading
 * @param onProgress - Callback function to report progress (0-100)
 * @returns {Promise<boolean>} - Resolves when all images are loaded
 */
export const preloadAllImages = async (
  onProgress?: (progress: number) => void
): Promise<boolean> => {
  // Remove duplicates
  const uniqueImages = [...new Set(APP_IMAGES)];

  console.log(`🚀 ULTRA FAST preloading ${uniqueImages.length} app images...`);

  try {
    let loadedCount = 0;
    const total = uniqueImages.length;

    const report = () => {
      if (onProgress) {
        const percent = Math.round((loadedCount / total) * 100);
        onProgress(percent);
      }
    };

    // Optimize connections for faster loading
    optimizeConnections();

    // ULTRA FAST parallel loading with immediate progress updates
    const loadPromises = uniqueImages.map((src, index) => {
      return preloadSingleImageUltraFast(src)
        .then(() => {
          loadedCount += 1;
          report();
          console.log(`⚡ Loaded ${index + 1}/${total}: ${src}`);
        })
        .catch((err) => {
          console.error(`❌ Failed: ${src}`, err);
          loadedCount += 1;
          report();
        });
    });

    // Load all images simultaneously with maximum concurrency
    await Promise.allSettled(loadPromises);

    report();
    return true;
  } catch (error) {
    console.error("❌ Preloading failed completely:", error);
    return false;
  }
};

/**
 * Optimize network connections for faster image loading
 */
const optimizeConnections = () => {
  // Preconnect to Cloudinary if using it
  if (typeof document !== "undefined") {
    const preconnectLink = document.createElement("link");
    preconnectLink.rel = "preconnect";
    preconnectLink.href = "https://res.cloudinary.com";
    document.head.appendChild(preconnectLink);

    // DNS prefetch for additional speed
    const dnsPrefetch = document.createElement("link");
    dnsPrefetch.rel = "dns-prefetch";
    dnsPrefetch.href = "https://res.cloudinary.com";
    document.head.appendChild(dnsPrefetch);
  }
};

/**
 * Preload a single image with ULTRA FAST optimization
 * @param src - Image source URL
 * @returns Promise that resolves with loaded image
 */
const preloadSingleImageUltraFast = (
  src: string
): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    // ULTRA FAST loading settings
    img.loading = "eager";
    img.decoding = "async";
    img.fetchPriority = "high";

    // Set crossOrigin if needed for Cloudinary
    if (src.includes("cloudinary.com")) {
      img.crossOrigin = "anonymous";
    }

    // Set timeout for very fast loading
    const timeout = setTimeout(() => {
      console.warn(`⏰ Timeout loading: ${src}`);
      reject(new Error(`Timeout loading image: ${src}`));
    }, 2000); // 2 second timeout

    img.onload = () => {
      clearTimeout(timeout);
      resolve(img);
    };

    img.onerror = () => {
      clearTimeout(timeout);
      console.warn(`❌ Failed to load: ${src}`);
      reject(new Error(`Failed to load image: ${src}`));
    };

    // Start loading immediately with high priority
    img.src = src;
  });
};

/**
 * Preload a single image with aggressive optimization (fallback)
 * @param src - Image source URL
 * @returns Promise that resolves with loaded image
 */
const preloadSingleImage = (src: string): Promise<HTMLImageElement> => {
  return preloadSingleImageUltraFast(src);
};

/**
 * Get loading progress (0-100)
 * @returns Loading progress percentage
 */
export const getLoadingProgress = async (): Promise<number> => {
  const uniqueImages = [...new Set(APP_IMAGES)];
  let loadedCount = 0;

  const promises = uniqueImages.map((src) =>
    preloadSingleImage(src)
      .then(() => {
        loadedCount++;
        return loadedCount;
      })
      .catch(() => {
        loadedCount++;
        return loadedCount;
      })
  );

  await Promise.all(promises);
  return Math.round((loadedCount / uniqueImages.length) * 100);
};
