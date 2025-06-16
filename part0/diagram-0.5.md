# Exercício 0.5 - Diagrama de acesso a SPA

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

