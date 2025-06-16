# Exercício 0.6 - Diagrama de nova nota em SPA

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET /spa
    activate server
    server-->>browser: HTML page
    deactivate server

    browser->>server: GET /main.css
    server-->>browser: CSS file

    browser->>server: GET /main.js
    server-->>browser: JavaScript file

    Note right of browser: JS runs and request data

    browser->>server: GET /data.json
    server-->>browser: JSON data with notes

    Note right of browser: JS renders note on the page

    Note right of browser: User writes note and clicks "Save"

    browser->>server: POST /new_note (note data)
    activate server
    server-->>browser: HTTP 201 Created (or empty response)
    deactivate server

    Note right of browser: JS updates note list on the page without reloading

