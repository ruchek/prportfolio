import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const projectDetails = {
  1: {
    title: 'Schneider Electrics – Embedded System Management',
    category: 'Enterprise',
    duration: 'October 2024 – February 2024',
    tools: ['Figma', 'Miro', 'User Testing Reports'],
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop',
    overview: 'Schneider Electrics wanted to modernize their embedded system management platform, which engineers and technicians use daily to control critical industrial operations. The system had to support multiple modules — Login, Monitoring & Control, Diagnostics, Maintenance, Settings, and Security.',
    sections: [
      {
        title: 'Research & Discovery',
        content: 'I interviewed system engineers and field technicians to capture their day-to-day workflow challenges. Engineers emphasized the need for real-time diagnostics, while technicians highlighted the difficulty of navigating through multi-level menus when under pressure. Heuristic evaluation showed overloaded dashboards, inconsistent navigation patterns, and poor visibility of system states.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop'
      },
      {
        title: 'Design Process',
        content: 'I restructured the platform into a clear module hierarchy with logical grouping of tasks. Using Figma, I created low-fidelity wireframes focusing on clean layouts, clear pathways for completing critical tasks, and standardized navigation patterns. Key iterations included side-panel navigation and progressive disclosure in security settings.',
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=500&fit=crop'
      },
      {
        title: 'Outcome & Reflection',
        content: 'Troubleshooting time dropped by 25% thanks to simplified diagnostics and visual alerts. Technician confidence increased, as users no longer second-guessed navigation or task completion. Compliance improved because streamlined security settings encouraged proper use.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
      }
    ]
  },
  2: {
    title: 'B2B Skillmatrix – AI-powered Marketplace',
    category: 'Enterprise',
    duration: 'June 2024 – September 2024',
    tools: ['Figma', 'Miro', 'Usability Testing Sessions'],
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    overview: 'B2B Skillmatrix set out to design an AI-powered B2B eCommerce marketplace that would help small and medium enterprises efficiently match their workforce needs with available talent across their partner ecosystem.',
    sections: [
      {
        title: 'Research & Discovery',
        content: 'I analyzed existing HR and eCommerce platforms to understand their strengths and shortcomings. A/B testing with two dashboard layouts showed a strong preference for simplified, task-first designs. I developed three key personas: SME Owner, HR Manager, and Recruiter.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop'
      },
      {
        title: 'Design Process',
        content: 'I began with low-fidelity wireframes mapping the core flows: posting demand for talent, viewing available partners, and accessing AI-driven predictions. A scalable design system was built with reusable components for consistency across modules.',
        image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=500&fit=crop'
      },
      {
        title: 'Outcome & Reflection',
        content: 'The final design delivered real-time dashboards showing workforce availability and demand trends, seamless collaboration tools, and secure workflows with transparent data-sharing. SMEs reported faster turnaround times and increased platform engagement.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop'
      }
    ]
  },
  3: {
    title: 'Production Scheduling Tool – Manufacturing',
    category: 'Enterprise',
    duration: 'March 2024 – May 2024',
    tools: ['Figma', 'Miro', 'AG Grid/Charts'],
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop',
    overview: 'A leading manufacturing client relied on manual spreadsheets and disconnected tools for scheduling and forecasting. The challenge was to design a web-based scheduling tool that automated planning, improved forecasting, and provided dynamic, real-time visibility.',
    sections: [
      {
        title: 'Research & Discovery',
        content: 'I spoke with production managers, planners, and supervisors to map their daily workflows. They emphasized the need for a system that could adapt to last-minute changes without requiring a full reschedule. Task analysis discovered managers often manually cross-checked data across multiple systems.',
        image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=500&fit=crop'
      },
      {
        title: 'Design Process',
        content: 'I created end-to-end scheduling workflows in Miro as a blueprint. Initial wireframes covered scheduling grids, forecast dashboards, and alerts for conflicts. Key iterations included color-coded schedules and interactive charts with filters.',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=500&fit=crop'
      },
      {
        title: 'Outcome & Reflection',
        content: 'Scheduling was automated, saving approximately 20% of manual effort. Forecast dashboards improved accuracy and reduced last-minute errors. Managers had real-time visibility, making production more adaptive.',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop'
      }
    ]
  },
  4: {
    title: 'Secure Land Properties – Real Estate Platform',
    category: 'Web & Mobile',
    duration: 'February 2024 – March 2024',
    tools: ['Figma', 'Miro'],
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop',
    overview: 'The real estate market required a centralized property management platform for buyers, sellers, and agents. The goal was to design a secure, user-friendly platform that simplified property management and instilled confidence in users.',
    sections: [
      {
        title: 'Research & Discovery',
        content: 'I surveyed over 50 buyers and agents. Buyers highlighted frustration with overwhelming listings, while agents wanted better tools for transaction tracking. Journey mapping revealed friction mainly at filtering and transaction stages.',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop'
      },
      {
        title: 'Design Process',
        content: 'I created wireframes for buyer-facing search flows, agent dashboards for deal tracking, and property comparison screens. Key iterations included step-based guided filters, side-by-side property comparison, and status trackers for transaction progress.',
        image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=500&fit=crop'
      },
      {
        title: 'Outcome & Reflection',
        content: 'Buyers could quickly filter and compare properties with confidence. Agents had dashboards for tracking deals end-to-end. Transparent transaction workflows improved trust and reduced drop-offs.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop'
      }
    ]
  },
  5: {
    title: 'Event Management Platform',
    category: 'Web & Mobile',
    duration: 'September 2023 – January 2024',
    tools: ['Figma', 'Miro'],
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop',
    overview: 'Event organizers faced challenges managing events using multiple disconnected tools. The goal was to build a unified digital platform for web and mobile, streamlining event creation, booking, and participation.',
    sections: [
      {
        title: 'Research & Discovery',
        content: 'I spoke with event organizers who reported frustration with juggling multiple systems. User surveys gathered feedback from attendees with the key complaint: booking tickets felt confusing and often led to abandoned transactions.',
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=500&fit=crop'
      },
      {
        title: 'Design Process',
        content: 'I mapped key flows for ticketing, event scheduling, and attendee registration. Key iterations simplified attendee booking to 3 steps, added reminder notifications, and designed analytics dashboards for organizers.',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop'
      },
      {
        title: 'Outcome & Reflection',
        content: 'Attendees reported faster, smoother booking experiences. Organizers had a single dashboard for ticketing, scheduling, and announcements. Overall platform adoption increased across small and medium-scale events.',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop'
      }
    ]
  },
  6: {
    title: 'American Battery Solutions – Energy Dashboard',
    category: 'Enterprise',
    duration: 'May 2023 – August 2023',
    tools: ['Figma', 'Adobe XD', 'Miro', 'Sketch', 'InVision'],
    heroImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop',
    overview: 'American Battery Solutions needed a web-based energy management dashboard for monitoring and controlling their TeraStor battery systems. The project required a scalable, component-driven platform that simplified complex data visualization.',
    sections: [
      {
        title: 'Research & Discovery',
        content: 'I studied energy monitoring dashboards from Tesla and Schneider. Engineer interviews showed they needed single-glance insights rather than scrolling through multiple views, and desired predictive alerts.',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=500&fit=crop'
      },
      {
        title: 'Design Process',
        content: 'I created a scalable UI system in Figma with reusable components. Key iterations included redesigning the alert system with prioritized warnings and simplifying ramp management dashboards with drag-and-drop scheduling.',
        image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800&h=500&fit=crop'
      },
      {
        title: 'Outcome & Reflection',
        content: 'Delivered a unified dashboard to monitor TeraStor systems. Engineers could respond faster to critical alerts. Component-based design enabled scalability across multiple energy management products.',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=500&fit=crop'
      }
    ]
  },
  7: {
    title: 'E-commerce Platforms – Multi-brand',
    category: 'E-commerce',
    duration: 'March 2023 – April 2023',
    tools: ['Figma', 'Adobe XD', 'Miro', 'Sketch', 'InVision'],
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
    overview: 'Clients across different industries required modernized e-commerce platforms. The objective was to design responsive, user-friendly web and mobile applications that aligned with each brand\'s identity.',
    sections: [
      {
        title: 'Research & Discovery',
        content: 'I built personas based on buyer types: End Consumers and Distributors/Resellers. Heuristic evaluation found checkout flows had too many steps and navigation was non-intuitive on mobile.',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop'
      },
      {
        title: 'Design Process',
        content: 'I designed low-fidelity wireframes for web and mobile flows, focused on simplified navigation, search-first layouts, and shorter checkouts. Key iterations introduced responsive grids and bulk order features for B2B flows.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop'
      },
      {
        title: 'Outcome & Reflection',
        content: 'Delivered responsive, mobile-first platforms across all three brands. Improved user engagement and higher conversion rates. Mobile experiences became primary drivers of business growth.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop'
      }
    ]
  },
  8: {
    title: 'BJP Recruitment Portal',
    category: 'Web & Mobile',
    duration: 'January 2023 – February 2023',
    tools: ['Figma', 'Adobe XD', 'Miro', 'Sketch'],
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop',
    overview: 'The political party needed a recruitment portal to streamline candidate registration and job applications. The existing process was manual, time-consuming, and intimidating due to long forms.',
    sections: [
      {
        title: 'Research & Discovery',
        content: 'Workshops with recruiters revealed they needed a centralized database and clear candidate pipeline view. User testing showed candidates preferred flows that broke the application into smaller, digestible steps.',
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop'
      },
      {
        title: 'Design Process',
        content: 'I restructured the process into step-by-step modules. Key iterations introduced auto-save functionality, added progress bars, and designed recruiter dashboards with filters and candidate profiles.',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=500&fit=crop'
      },
      {
        title: 'Outcome & Reflection',
        content: 'Registration completion rates increased significantly. Recruiters could manage and filter applications easily. The simplified, guided flow reduced candidate anxiety.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop'
      }
    ]
  },
  9: {
    title: 'Hotel Booking Platform',
    category: 'E-commerce',
    duration: 'October 2022 – December 2022',
    tools: ['Figma', 'Adobe XD', 'Miro', 'Sketch'],
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop',
    overview: 'The client wanted to create a modern hotel booking platform with both customer-facing flows and a super admin dashboard for operators and agents.',
    sections: [
      {
        title: 'Research & Discovery',
        content: 'I studied platforms like Booking.com, MakeMyTrip, and Agoda. Heuristic evaluation identified overly technical admin panels and booking flows that buried pricing details.',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=500&fit=crop'
      },
      {
        title: 'Design Process',
        content: 'I created wireframes for customer-facing booking screens and admin dashboards with MIS reporting features. Key iterations redesigned booking into a 3-step guided process and introduced downloadable reports.',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=500&fit=crop'
      },
      {
        title: 'Outcome & Reflection',
        content: 'Customers had a clear, modern booking flow with fewer drop-offs. Admin dashboards became more actionable with real-time reports. Trust improved through transparent content validation.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop'
      }
    ]
  },
  10: {
    title: 'Geriatrics Healthcare Application',
    category: 'Healthcare',
    duration: 'May 2022 – September 2022',
    tools: ['Figma', 'Miro', 'InVision'],
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop',
    overview: 'The client needed a healthcare platform designed specifically for elderly care management. It had to serve both patients and caregivers with simple, accessible dashboards.',
    sections: [
      {
        title: 'Research & Discovery',
        content: 'I surveyed both elderly patients and caregivers. Elderly users asked for larger fonts, simple icons, and reduced cognitive load. Competitor analysis found most healthcare apps were not senior-friendly.',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=500&fit=crop'
      },
      {
        title: 'Design Process',
        content: 'Low-fi wireframes focused on large touch targets, high-contrast colors, and simple navigation. Key iterations improved dashboard readability with color-coded stats and introduced multi-admin roles.',
        image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=500&fit=crop'
      },
      {
        title: 'Outcome & Reflection',
        content: 'Delivered a multi-admin dashboard supporting caregiver collaboration. Improved accessibility for elderly patients with larger fonts and better contrast. Reduced caregiver workload significantly.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop'
      }
    ]
  },
  11: {
    title: 'Elfonze Website Redesign',
    category: 'Web & Mobile',
    duration: 'January 2022 – April 2022',
    tools: ['WIX'],
    heroImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop',
    overview: 'Elfonze Technologies\' website was outdated and struggled with low interaction and poor branding alignment. The goal was to redesign the site for modern branding and improved engagement.',
    sections: [
      {
        title: 'Research & Discovery',
        content: 'Heuristic evaluation revealed navigation inconsistencies and weak call-to-action placement. Analytics showed visitors abandoned the site within the first two clicks and mobile experience was underperforming.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop'
      },
      {
        title: 'Design Process',
        content: 'I created wireframes for homepage, services, case studies, and contact sections. The final redesign was built in WIX with simplified navigation into 5 clear categories and improved homepage messaging with bold CTAs.',
        image: 'https://images.unsplash.com/photo-1522542550221-31fd8575fab8?w=800&h=500&fit=crop'
      },
      {
        title: 'Outcome & Reflection',
        content: 'Improved website interaction and engagement. Reduced bounce rates significantly. Strengthened brand image through updated design and clearer communication.',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop'
      }
    ]
  },
  12: {
    title: 'Healthcare App Redesign',
    category: 'Healthcare',
    duration: 'November 2021 – February 2022',
    tools: ['Figma', 'Miro'],
    heroImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
    overview: 'A healthcare mobile app had become cluttered with unclear flows and accessibility issues. Patients and providers both reported frustration with navigation.',
    sections: [
      {
        title: 'Research & Discovery',
        content: 'I spoke with healthcare providers who emphasized the need for simpler workflows. Competitor analysis of Practo and MyChart revealed the importance of highlighting critical actions upfront.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop'
      },
      {
        title: 'Design Process',
        content: 'Low-fi screens were created for appointment booking, report access, and navigation menus. Key iterations improved contrast and typography, reduced navigation layers by 30%, and added onboarding guidance.',
        image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=500&fit=crop'
      },
      {
        title: 'Outcome & Reflection',
        content: 'App became cleaner, faster, and easier to use. Booking and report access times were reduced. Healthcare design demands clarity and empathy — by simplifying journeys, patients felt less stressed.',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop'
      }
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) {
    return (
      <div id="main" className="alt">
        <section className="section-inner" style={{ textAlign: 'center', padding: '8em 2em' }}>
          <h2>Project not found</h2>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="button">Back to Projects</Link>
        </section>
      </div>
    );
  }

  return (
    <div id="main" className="alt">
      {/* Hero Banner */}
      <section
        id="banner"
        className="style2"
        style={{
          backgroundImage: `url(${project.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="inner">
          <header className="major">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {project.title}
            </motion.h1>
          </header>
          <motion.div
            className="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              <strong>{project.category}</strong> &nbsp;|&nbsp; {project.duration}
            </p>
            <p>
              <strong>Tools:</strong> {project.tools.join(', ')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <header className="major">
            <h2>Project Overview</h2>
          </header>
          <p style={{ fontSize: '1.1em', lineHeight: '1.8' }}>{project.overview}</p>
        </motion.div>
      </section>

      {/* Spotlights Sections */}
      <section className="spotlights">
        {project.sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <span className="image">
              <img src={section.image} alt={section.title} />
            </span>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>{section.title}</h3>
                </header>
                <p>{section.content}</p>
              </div>
            </div>
          </motion.section>
        ))}
      </section>

      {/* Navigation */}
      <section className="section-inner" style={{ textAlign: 'center' }}>
        <ul className="actions" style={{ justifyContent: 'center' }}>
          <li>
            <Link to="/projects" className="button">
              <i className="fas fa-arrow-left"></i>&nbsp; All Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="button primary">
              Start a Project &nbsp;<i className="fas fa-arrow-right"></i>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
