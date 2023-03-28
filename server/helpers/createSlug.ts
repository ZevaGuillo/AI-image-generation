export const createSlug = (nombre) => {
    let slug = nombre.trim().toLowerCase();
    
    slug = slug.replace(/[^a-z0-9]+/g, "_");

    const randomNumber = Math.floor(Math.random() * 10000);
    slug += `-${randomNumber}`;

    return slug;
  }