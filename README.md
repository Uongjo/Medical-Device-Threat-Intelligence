# Medical-Device-Threat-Intelligence

Our proposed product is an asset inventory management software that works to check available databases for security vulnerabilities, as well as any potential recalls. Our software monitors the CVE database (common vulnerabilities and exposures database) as well as the Food and Drug Administration’s database of biomedical / medical device recalls. If a vulnerability or a recall were to exist for a device that the healthcare professionals have in their asset list, they would be promptly notified with a description of the problem. We believe software like this could make a big difference to the lives of those relying on medical devices.

## Running the Application

Move into the front-end directory

```
cd front-end
```

If you don't have npm already installed, use the following command:

```
npm install npm@latest -g
```

1. Clone the repo

```
git clone https://github.com/Uongjo/Medical-Device-Threat-Intelligence.git
```

2. Run npm install inside project root

```
npm install
```

3. Start the server

```
npm run start
```

Note: If server does not run because of node sass, install the dependency with

```
npm i node-sass
```

then start the server with step 3