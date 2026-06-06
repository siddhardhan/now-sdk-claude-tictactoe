// ServiceNow SP widget client-side globals for LSP / TypeScript Language Server
// Provides IntelliSense for the AngularJS controller registration
// in all client_script.js widget files.

declare const api: {
    /** Register the AngularJS controller for this widget */
    controller: Function;
    /** Widget options passed from the server */
    options: { [key: string]: any };
};
