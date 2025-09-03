// Define all images used in the app
const APP_IMAGES = [
  // Hero section images
  "/hero.svg",
  "/zero.svg",
  "/sub-hero.svg",
  "/mask.svg",

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

/**
 * Preload all images for the entire app
 * @param onProgress - Callback function to report progress (0-100)
 * @returns {Promise<boolean>} - Resolves when all images are loaded
 */
export const preloadAllImages = async (
  onProgress?: (progress: number) => void
): Promise<boolean> => {
  // Remove duplicates
  const uniqueImages = [...new Set(APP_IMAGES)];

  console.log(`🖼️ Preloading ${uniqueImages.length} app images...`);

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

    // Preload all app images with aggressive parallel loading
    const loadPromises = uniqueImages.map((src, index) => {
      return preloadSingleImage(src)
        .then(() => {
          loadedCount += 1;
          report();
          console.log(`✅ Loaded ${index + 1}/${total}: ${src}`);
        })
        .catch((err) => {
          console.error(`❌ Failed: ${src}`, err);
          loadedCount += 1;
          report();
        });
    });

    // Load all images simultaneously for maximum speed
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
 * Preload a single image with aggressive optimization
 * @param src - Image source URL
 * @returns Promise that resolves with loaded image
 */
const preloadSingleImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    // Set loading priority for faster loading
    img.loading = "eager";
    img.decoding = "async";

    // Set crossOrigin if needed for Cloudinary
    if (src.includes("cloudinary.com")) {
      img.crossOrigin = "anonymous";
    }

    img.onload = () => {
      console.log(`✅ Loaded: ${src}`);
      resolve(img);
    };

    img.onerror = () => {
      console.warn(`❌ Failed to load: ${src}`);
      reject(new Error(`Failed to load image: ${src}`));
    };

    // Start loading immediately
    img.src = src;
  });
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
