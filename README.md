# Nafri SDK

A JavaScript SDK for interacting with the Nafri platform API. Use it to upload files, delete files, and list uploaded files effortlessly.

## Features

- Upload files to Nafri
- Delete files by ID
- List all uploaded files
- Lightweight and easy to integrate

## Installation

Install the SDK via npm:

```bash
npm install nafri-sdk
```

## Usage

Import and Initialize

`import Nafri from "nafri-sdk";`

`const nafri = new Nafri({`
  `baseUrl: "https://example-nafri.com/api",`
  `apiKey: "your-api-key",`
`});`

##  Methods
uploadFile(file: File): Promise<object>
Uploads a file to the Nafri platform.

```const fileInput = document.querySelector('input[type="file"]');
const file = fileInput.files[0];

nafri.uploadFile(file)
  .then((response) => console.log("File uploaded:", response))
  .catch((error) => console.error("Upload failed:", error));
 ```

# Deletes a file by its ID.

```nafri.deleteFile("fileId123")
  .then((response) => console.log("File deleted:", response))
  .catch((error) => console.error("Deletion failed:", error));
  ```

# Lists all uploaded files.
```nafri.listFiles()
  .then((files) => console.log("Uploaded files:", files))
  .catch((error) => console.error("Fetching files failed:", error));
  ```

### Example Workflow
```const nafri = new Nafri({
  baseUrl: "https://example-nafri.com/api",
  apiKey: "your-api-key",
});

// Upload a file
const file = document.querySelector('input[type="file"]').files[0];
nafri.uploadFile(file)
  .then((response) => console.log("File uploaded successfully:", response))
  .catch((error) => console.error("File upload failed:", error));

// Delete a file
nafri.deleteFile("fileId123")
  .then((response) => console.log("File deleted successfully:", response))
  .catch((error) => console.error("File deletion failed:", error));

// List all files
nafri.listFiles()
  .then((files) => console.log("Files:", files))
  .catch((error) => console.error("Fetching files failed:", error));
  ```
### Configuration
During initialization, the Nafri class requires a configuration object:
| Property      | Type        | Description                      |
| -----------   | ----------- | -------------------------------- |
| baseUrl       | String      |    The base URL of the Nafri API |
| apiKey        | String      |  Your API key for authentication |

# Example Configuration
```const nafri = new Nafri({
  baseUrl: "https://example-nafri.com/api",
  apiKey: "your-api-key",
});
```

# Error Handling
Errors are thrown as JavaScript Error objects. Handle them using .catch() or try-catch blocks.
```try {
  const files = await nafri.listFiles();
  console.log("Files:", files);
} catch (error) {
  console.error("Error fetching files:", error);
}
```
### License
This SDK is licensed under the MIT License. Feel free to use, modify, and contribute.

### Contributing
Contributions are welcome! Submit issues or pull requests on the GitHub repository.