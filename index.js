class Nafri {
    constructor(config) {
      if (!config || !config.baseUrl || !config.apiKey) {
        throw new Error("Configuration object with baseUrl and apiKey is required");
      }
      this.baseUrl = config.baseUrl;
      this.apiKey = config.apiKey;
    }
  
    async uploadFile(file) {
      try {
        if(!file){
            throw new Error( "File not found");
        }
        const formData = new FormData();
        formData.append("file", file);
  
        const response = await fetch(`${this.baseUrl}/`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
          body: formData,
        });
  
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "File upload failed");
        }
  
        return data;
      } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
      }
    }
  
    async deleteFile(fileId) {
      try {
        const response = await fetch(`${this.baseUrl}/`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.apiKey}`,
          },
          body: JSON.stringify({ fileId }),
        });
  
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "File deletion failed");
        }
  
        return data;
      } catch (error) {
        console.error("Error deleting file:", error);
        throw error;
      }
    }
  
    async listFiles() {
      try {
        const response = await fetch(`${this.baseUrl}/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        });
  
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch uploads");
        }
  
        return data.files;
      } catch (error) {
        console.error("Error fetching uploads:", error);
        throw error;
      }
    }
  }
  
module.exports = Nafri;