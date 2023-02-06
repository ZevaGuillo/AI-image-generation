export const createSlug = (nombre) => {
    let slug = nombre.trim().toLowerCase();
    
    slug = slug.replace(/[^a-z0-9]+/g, "_");
    
    return slug;
  }