import {
  Ecommerce,
  Expense,
  Infosys,
  az900,
  az104,
  az400,
  ai102,
  az305,
  az500,
  jscolab,
  jenkins,
  website,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

// const experiences = [
//   {
//     title: 'Senior Systems Engineer',
//     company_name: 'Infosys Ltd.',
//     icon: Infosys,
//     iconBg: '#383E56',
//     date: 'Sept 2021 - Present',
//     points: [
//       'Designed and provided solutions for networking circuits that connected different locations across the United States as a Solutions Architect for Networking Systems at Lumen Technologies.',
//       'Designed customer circuits using advanced wavelength architectures for metro and long-haul Dense wavelength division multiplexing(DWDM) networks.',
//       'Utilized in-depth knowledge of networking technologies and protocols to analyze customer requirements and propose optimal solutions that met their needs.',
//       'Collaborated closely with sales teams, network engineers and customers to ensure successful implementation of designed solutions.',
//     ],
//   },
//   {
//     title: 'Systems Engineer Trainee',
//     company_name: 'Infosys',
//     icon: Infosys,
//     iconBg: '#383E56',
//     date: 'June 2021 - Sept 2021',
//     points: [
//       "Learned Active Directory Administrator for on Premise infrastructure and on Cloud. Learned the responsibility of managing and maintaining the organization's Active Directory infrastructure",
//       'Learned how to maintain the secure and efficient operation of the Active Directory system, which involved tasks such as managing user accounts, groups, and network resources.',
//       'I also gained experience in enforcing security policies and ensuring compliance with industry regulations to safeguard sensitive data and ensure uninterrupted access for all users.',
//     ],
//   },
// ];

const experiences = [
  {
    title: 'Senior Systems Engineer',
    company_name: 'Infosys Ltd.',
    icon: Infosys,
    iconBg: '#383E56',
    date: 'Sept 2021 - Present',
    points: [
      'Implemented and maintained CI/CD processes through Jenkins, automating builds and deployments using declarative pipeline scripts with Groovy-DSL methods.',
      'Automated Jenkins builds triggered by Git pushes via Webhooks. Integrated essential testing tools like SonarQube, utilized Maven as the build tool, and stored artifacts in JFrog repositories.',
      'Automated deploying reliable cloud infrastructure using Terraform reducing human efforts by 60%.',
      'Initiated and led a team restructuring effort, consolidating two separate teams into an integrated group of 11 members. This strategic realignment optimized workflows, leading to a 75% improvement in meeting client SLAs for network circuit implementations.',
      'Developed documentation for team that slashed errors by 68% in the first month of implementation.',
      'Experienced with containerization and orchestration technologies like Docker and Kubernetes.',
      'Maintained monitoring and alerting system with tools like Grafana, Prometheus, etc.',
    ],
  },
  {
    title: 'Systems Engineer',
    company_name: 'Infosys',
    icon: Infosys,
    iconBg: '#383E56',
    date: 'June 2021 - Sept 2021',
    points: [
      'Managed 15 AWS production accounts including the setup and configuration of EC2, RDS instances, VPC, load balancers, API Gateway, Cloudwatch, Route 53 hosted zones, health checks, etc.',
      'Slashed spending on EC2 by 40% on using Graviton-2 based instances, concluding after based on my research on EC2 instances and storage systems.',
      'Skilled in troubleshooting live production services and designing complex wavelength network architectures for Fortune 500 companies.',
      'Achieved 60% reduction in workload by implementing Python scripting for automation, resulting in a significant 55% decrease in errors. Automated routine tasks using bash scripts.',
      'Extensive knowledge of designing and deploying networking AWS services including VPC, route tables, firewalls, security groups and NACL, NAT gateway, load balancer and, VPC flow logs.',
    ],
  },
];

const projects = [
  {
    name: 'Jenkins-Driven GitOps CI/CD Pipeline',
    description:
      'Developed a robust GitOps-driven Jenkins pipeline for end-to-end deployments in Azure, managing multi-stage processes like app building, testing, Dockerization, Trivy-based scanning, and CD triggers. Orchestrated Azure VMs, facilitating Jenkins and ArgoCD operations, ensuring version-controlled, synchronized deployments to Kubernetes clusters.',
    tags: [
      {
        name: 'Jenkins',
        color: 'blue-text-gradient',
      },
      {
        name: 'ArgoCD',
        color: 'green-text-gradient',
      },
      {
        name: 'Azure',
        color: 'pink-text-gradient',
      },
    ],
    image: jenkins,
    source_code_link:
      'https://github.com/saqlaink/complete-production-e2e-pipeline',
  },
  {
    name: 'Azure Kubernetes Service(AKS) Portfolio Deployment',
    description:
      'Executed a high-performing portfolio website deployment using AKS, Docker, and Kubernetes. Integrated Terraform for Infrastructure as Code (IaC) in Azure resources setup. Employed Kubernetes for automated deployment, scaling, and services configuration, ensuring optimal hosting. Implemented K8s Ingress with HTTPS using Cert-Manager for advanced site security and encrypted access.',
    tags: [
      {
        name: 'Azure',
        color: 'blue-text-gradient',
      },
      {
        name: 'Kubernetes',
        color: 'green-text-gradient',
      },
      {
        name: 'Docker',
        color: 'pink-text-gradient',
      },
    ],
    image: website,
    source_code_link: 'https://github.com/saqlaink/Portfolio-Website-on-AKS',
  },
  {
    name: 'Scalable Website Hosting - Azure VMSS & Load Balancer',
    description:
      'Crafted within Azure, a robust infrastructure was orchestrated, harnessing the power of VM ScaleSet and Load Balancer for hosting a dynamic portfolio website. Azure VMSS facilitated automated scaling, adeptly managing fluctuating traffic without manual intervention. An Azure Load Balancer intelligently distributed web traffic among multiple VM instances, elevating performance and resilience. Terraform was employed to define infrastructure as code, enabling reproducible deployments and dynamic resource adjustments in response to traffic patterns.',
    tags: [
      {
        name: 'Azure',
        color: 'blue-text-gradient',
      },
      {
        name: 'Terraform',
        color: 'green-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'pink-text-gradient',
      },
    ],
    image: website,
    source_code_link:
      'https://github.com/saqlaink/Portfolio-Website-on-Azure-VMSS-with-LoadBalancer',
  },
  {
    name: 'Javascript Notebook',
    description:
      'Developed a full-stack web application using React for the frontend and Express for the backend. Used ESBuild for transpiling and bundling code by fetching required package from Unpkg.com. Published the ”jscolab” package on NPM, making it accessible to users through the command ”npx jscolab serve”.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Express',
        color: 'green-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'pink-text-gradient',
      },
    ],
    image: jscolab,
    source_code_link: 'https://github.com/saqlaink/JSNotebook',
  },
  {
    name: 'Ecommerce Website & Admin Panel',
    description:
      'Developed a modern Ecommerce web app and admin panel using Next.js. Implemented Next.js API routes for server-side logic, authentication,and data fetching. Integrated Stripe for secure online payments. Enabled routing and navigation for product categories. Added search and filtering for efficient product discovery. Developed Admin panel with management features for products, categories, featured products, and shipping fees.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'Next.js',
        color: 'green-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'pink-text-gradient',
      },
    ],
    image: Ecommerce,
    source_code_link: 'https://github.com/saqlaink/ecommerce-front',
  },
  {
    name: 'GCP Based CI/CD Pipeline',
    description:
      'Implemented a CI/CD pipeline for React app on GCP using Artifact Registry, Cloud Build Trigger, and Kubernetes Cluster. It automated software delivery for development and production on GitHub, using Git for version control and CloudBuild Triggers. Defined build steps in cloudbuild.yaml and used Artifact Registry to store container images. A GCP Kubernetes cluster was set up for efficient app deployment, with configuration details in gke.yaml.',
    tags: [
      {
        name: 'GCP',
        color: 'blue-text-gradient',
      },
      {
        name: 'Kubernetes',
        color: 'green-text-gradient',
      },
      {
        name: 'Docker',
        color: 'pink-text-gradient',
      },
    ],
    image: Expense,
    source_code_link: 'https://github.com/saqlaink/CICD-Pipeline-GCP',
  },
];
const certificates = [
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    tags: [
      {
        name: 'Describe cloud concepts',
        color: 'blue-text-gradient',
      },
      {
        name: 'Describe Azure architecture and services',
        color: 'green-text-gradient',
      },
      {
        name: 'Describe Azure management and governance',
        color: 'pink-text-gradient',
      },
    ],
    image: az900,
    source_code_link:
      'https://learn.microsoft.com/api/credentials/share/en-in/saqlainkhan-5109/AB16F762E9EE81BC?sharingId=FCC4FD2E3610000',
  },
  {
    name: 'Microsoft Certified: Azure AI Engineer Associate',
    tags: [
      {
        name: 'Plan and manage an Azure AI solution',
        color: 'blue-text-gradient',
      },
      {
        name: 'Implement generative AI solutions',
        color: 'green-text-gradient',
      },
      {
        name: 'Implement computer vision solutions',
        color: 'pink-text-gradient',
      },
      {
        name: 'Implement natural language processing solutions',
        color: 'pink-text-gradient',
      },
      {
        name: 'Implement knowledge mining and document intelligence solutions',
        color: 'pink-text-gradient',
      },
    ],
    image: ai102,
    source_code_link:
      'https://learn.microsoft.com/en-us/users/saqlainkhan-5109/credentials/8ec29f921483026d',
  },
  {
    name: 'Microsoft Certified: Azure Administrator',
    tags: [
      {
        name: 'Manage Azure identities and governance',
        color: 'blue-text-gradient',
      },
      {
        name: 'Implement and manage storage',
        color: 'green-text-gradient',
      },
      {
        name: 'Deploy and manage Azure compute resources',
        color: 'pink-text-gradient',
      },
      {
        name: 'Implement and manage virtual networking',
        color: 'pink-text-gradient',
      },
      {
        name: 'Monitor and maintain Azure resources',
        color: 'pink-text-gradient',
      },
    ],
    image: az104,
    source_code_link:
      'https://learn.microsoft.com/en-gb/users/saqlainkhan-5109/credentials/D8D5F40F15A83EC2',
  },
  {
    name: 'Microsoft Certified: Azure Solutions Architect Expert',
    tags: [
      {
        name: 'Design identity, governance, and monitoring solutions',
        color: 'blue-text-gradient',
      },
      {
        name: 'Design data storage solutions',
        color: 'green-text-gradient',
      },
      {
        name: 'Design business continuity solutions',
        color: 'pink-text-gradient',
      },
      {
        name: 'Design infrastructure solutions',
        color: 'pink-text-gradient',
      },
    ],
    image: az305,
    source_code_link:
      'https://learn.microsoft.com/en-us/users/saqlainkhan-5109/credentials/89c2f09d905df104',
  },
  {
    name: 'Microsoft Certified: DevOps Engineer Expert',
    tags: [
      {
        name: 'Configure processes and communications',
        color: 'blue-text-gradient',
      },
      {
        name: 'Design and implement source control',
        color: 'green-text-gradient',
      },
      {
        name: 'Design and implement build and release pipelines',
        color: 'pink-text-gradient',
      },
      {
        name: 'Develop a security and compliance plan',
        color: 'pink-text-gradient',
      },
      {
        name: 'Implement an instrumentation strategy',
        color: 'pink-text-gradient',
      },
    ],
    image: az400,
    source_code_link:
      'https://learn.microsoft.com/en-us/users/saqlainkhan-5109/credentials/7056a45526e9f0fb',
  },
  {
    name: 'Microsoft Certified: Azure Security Engineer Associate',
    tags: [
      {
        name: 'Manage identity and access',
        color: 'blue-text-gradient',
      },
      {
        name: 'Secure networking',
        color: 'green-text-gradient',
      },
      {
        name: 'Secure compute, storage, and databases',
        color: 'pink-text-gradient',
      },
      {
        name: 'Manage security operations',
        color: 'pink-text-gradient',
      },
    ],
    image: az500,
    source_code_link:
      'https://learn.microsoft.com/en-us/users/saqlainkhan-5109/credentials/486b8e9a22642323',
  },
];

export { experiences, projects, certificates };
