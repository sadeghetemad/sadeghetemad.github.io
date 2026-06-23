'use strict';

// Experience Section Component
const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      year: "2026",
      role: "Senior AI Engineer",
      company: "CPI, United Kingdom",
      period: "Mar 2026 – Present",
      description:
        "Designing and building AI systems for industrial and healthcare applications, with a focus on Agentic AI, LLM-powered workflows, multimodal data integration, cloud-native architectures, and production-ready AI solutions."
    },
    {
      id: 2,
      year: "2025",
      role: "Senior Research Engineer – Multimodal AI Systems",
      company: "Teesside University, Middlesbrough, UK",
      period: "Jul 2025 – Feb 2026",
      description:
        "Developed multimodal AI pipelines for cancer research by combining biomedical imaging, spatial transcriptomics, and metabolic data. Built deep learning workflows supporting cancer detection, biomarker discovery, and model interpretability."
    },
    {
      id: 3,
      year: "2024",
      role: "AI Tech Lead – LLM & RAG Systems",
      company: "EdTech-Wallex, Tehran, Iran",
      period: "Jul 2024 – Jul 2025",
      description:
        "Led the architecture and delivery of LLM-powered educational systems for university entrance exam preparation, including RAG pipelines, multi-chain reasoning workflows, automated content generation, and personalized learning features."
    },
    {
      id: 4,
      year: "2023",
      role: "AI Tech Lead",
      company: "Snapp!, Tehran, Iran",
      period: "Jan 2023 – Jul 2024",
      description:
        "Led technical direction for large-scale ML systems supporting traffic prediction and ETA estimation across millions of daily trips. Owned model architecture, production reliability, incident resolution, and team mentorship while remaining hands-on."
    },
    {
      id: 5,
      year: "2020",
      role: "Senior Machine Learning Engineer",
      company: "Snapp!, Tehran, Iran",
      period: "May 2020 – Jan 2023",
      description:
        "Built and maintained production ML pipelines for traffic forecasting, routing, and ETA improvement. Worked on large-scale geospatial and time-series data, real-time model serving, monitoring, and reliability for high-traffic mobility systems."
    },
    {
      id: 6,
      year: "2018",
      role: "Machine Learning Engineer",
      company: "Kian Digital, Tehran, Iran",
      period: "Dec 2018 – May 2020",
      description:
        "Developed machine learning and quantitative modeling systems for financial forecasting, trend detection, and algorithmic decision-making on large-scale time-series data."
    },
    {
      id: 7,
      year: "2018",
      role: "Machine Learning Engineer",
      company: "Digikala, Tehran, Iran",
      period: "Jan 2018 – Dec 2018",
      description:
        "Implemented customer segmentation and personalization pipelines using behavioral features, RFM analysis, and clustering models to support marketing, targeting, and customer engagement."
    }
  ];

  const TimelineItem = (exp, index) => {
    const isLast = index === experiences.length - 1;

    return React.createElement(
      'div',
      {
        key: exp.id,
        className: 'relative flex gap-5 md:gap-8 pb-12 fade-in'
      },

      React.createElement(
        'div',
        {
          className: 'w-16 md:w-24 shrink-0 text-right pt-1'
        },
        React.createElement(
          'span',
          {
            className: 'text-lg md:text-2xl font-bold text-blue-700'
          },
          exp.year
        )
      ),

      React.createElement(
        'div',
        {
          className: 'relative flex flex-col items-center shrink-0'
        },
        React.createElement('div', {
          className:
            'w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md z-10'
        }),
        !isLast
          ? React.createElement('div', {
              className:
                'absolute top-4 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-yellow-500 to-indigo-500'
            })
          : null
      ),

      React.createElement(
        'div',
        {
          className:
            'flex-1 bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-1'
        },

        React.createElement(
          'div',
          {
            className:
              'flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3'
          },

          React.createElement(
            'div',
            null,

            React.createElement(
              'h3',
              {
                className: 'text-xl font-bold text-gray-900 mb-1'
              },
              exp.role
            ),

            React.createElement(
              'p',
              {
                className: 'text-sm font-medium text-gray-600'
              },
              exp.company
            )
          ),

          React.createElement(
            'span',
            {
              className:
                'inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold whitespace-nowrap'
            },
            exp.period
          )
        ),

        React.createElement(
          'p',
          {
            className: 'text-gray-700 leading-relaxed text-justify'
          },
          exp.description
        )
      )
    );
  };

  return React.createElement(
    'section',
    {
      id: 'experience',
      className: 'py-20 bg-gray-100 transition-colors duration-300'
    },

    React.createElement(
      'div',
      {
        className: 'container mx-auto px-4'
      },

      React.createElement(
        'div',
        {
          className: 'text-center mb-16 fade-in'
        },

        React.createElement(
          'h2',
          {
            className: 'text-3xl md:text-4xl font-bold mb-4 text-gray-900'
          },
          'Professional Experience'
        ),

        React.createElement('div', {
          className:
            'w-24 h-1.5 bg-gradient-to-r from-blue-600 via-yellow-500 to-indigo-600 mx-auto mb-6 rounded-full'
        }),

        React.createElement(
          'p',
          {
            className: 'max-w-2xl mx-auto text-lg text-gray-700'
          },
          'A career timeline across production AI, LLM systems, multimodal AI, healthcare platforms, and large-scale machine learning.'
        )
      ),

      React.createElement(
        'div',
        {
          className: 'max-w-5xl mx-auto'
        },
        experiences.map((exp, index) => TimelineItem(exp, index))
      )
    )
  );
};