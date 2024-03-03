const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DevOps Explanation</title>
  </head>
  <body>
    <h1>Hello there! I love DevOps, and I am going to do this.</h1>
    <p>DevOps is a set of practices, philosophies, and tools that aim to improve the collaboration and productivity of software development (Dev) and IT operations (Ops) teams. The primary goal of DevOps is to shorten the systems development life cycle while delivering features, fixes, and updates frequently in close alignment with business objectives. This approach emphasizes automation, continuous integration, continuous delivery, and reliable monitoring throughout the software development life cycle.</p>
    <p>DevOps practices are designed to automate and integrate the processes between software development and IT teams so they can build, test, and release software faster and more reliably. Key components of DevOps include:</p>
    <ul>
      <li><strong>Continuous Integration (CI):</strong> Developers frequently merge their code changes into a central repository, after which automated builds and tests are run.</li>
      <li><strong>Continuous Delivery (CD):</strong> Code changes are automatically built, tested, and prepared for a release to production so that software delivery is faster and more frequent.</li>
      <li><strong>Infrastructure as Code (IaC):</strong> Infrastructure is provisioned and managed using code and software development techniques, such as version control and continuous integration.</li>
      <li><strong>Monitoring and Logging:</strong> Systems are continuously monitored to identify and respond to issues in real-time. Logs are collected and analyzed to understand how software performance impacts the user experience.</li>
      <li><strong>Communication and Collaboration:</strong> Enhancing the collaboration between development and operations teams to improve the culture and processes.</li>
    </ul>
    <p>By adopting DevOps practices, organizations can achieve more efficient and predictable deployments, improve their release cycles, maintain higher quality software, and better respond to the needs of their business and customers.</p>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


