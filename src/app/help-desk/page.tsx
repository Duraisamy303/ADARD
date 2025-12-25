'use client'

import { motion } from 'framer-motion'
import { Ticket, MessageCircle, Clock, CheckCircle, Settings, BookOpen, Users, Calendar } from 'lucide-react'

const contactMethods = [
  {
    icon: Ticket,
    method: 'Submit a Ticket',
    label: 'Primary Channel',
    purpose: 'All general queries, non-urgent issues, and formal support requests.',
    responseTime: 'Initial response within 4 hours (during working hours)',
    gradient: 'from-blue-500 to-cyan-500',
    action: 'Submit a Support Ticket'
  },
  {
    icon: MessageCircle,
    method: 'Live Chat Assistance',
    label: 'Immediate Support',
    purpose: 'Immediate guidance for quick questions and urgent technical blockers.',
    responseTime: 'Real-time response (during scheduled hours)',
    gradient: 'from-green-500 to-teal-500',
    action: 'Start Live Chat Session'
  }
]

const services = [
  {
    icon: Settings,
    title: 'Incident Resolution',
    description: 'Efficient logging and tracking of technical errors, software bugs, and system outages from report to resolution.',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    icon: CheckCircle,
    title: 'Service Fulfillment',
    description: 'Management of routine administrative requests, including account access management, software procurement, and form submissions.',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    icon: BookOpen,
    title: 'Knowledge & Resource Management',
    description: 'Providing access to a curated knowledge base of documentation, templates, and essential procedural guides.',
    gradient: 'from-green-500 to-blue-500'
  },
  {
    icon: Users,
    title: 'Structured Escalation',
    description: 'Acting as a professional liaison between students and academic supervisors/technical experts for complex issues that require specialized input.',
    gradient: 'from-purple-500 to-pink-500'
  }
]

const projectStages = [
  {
    stage: 'Planning & Design',
    assistance: 'Environment setup, resource access, and procedural guidance.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    stage: 'Development & Testing',
    assistance: 'Technical troubleshooting, issue logging, and debugging support.',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    stage: 'Documentation & Submission',
    assistance: 'Formatting guidelines adherence, template provision, and platform assistance.',
    gradient: 'from-green-500 to-teal-500'
  }
]

export default function HelpDeskPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Project Support & <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">Help Desk Center</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
              Welcome to your dedicated resource for project assistance. The Help Desk provides professional, structured support to address technical, procedural, and administrative challenges throughout your final year projects. Our mission is to ensure clear communication and efficient resolution of your issues.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Accessing Support */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Accessing Support & Submitting Requests
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              We offer straightforward channels to access assistance. Utilizing our formal request system ensures accountability, efficient tracking, and timely resolution of every query.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.gradient} p-4`}>
                    <method.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {method.method}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${method.gradient} text-white text-sm font-semibold mt-1`}>
                      {method.label}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Purpose:</h4>
                    <p className="text-gray-600 dark:text-gray-300">{method.purpose}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Response Time:</h4>
                    <p className="text-gray-600 dark:text-gray-300">{method.responseTime}</p>
                  </div>
                </div>

                <button className={`w-full bg-gradient-to-r ${method.gradient} text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform`}>
                  {method.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Scope of Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Scope of Services & Support
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              The Help Desk provides comprehensive support services designed to integrate seamlessly with your project workflow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-3xl hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} p-4`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-3xl text-white">
              <p className="text-lg font-medium">
                Our focus is on delivering reliable, structured support to facilitate uninterrupted project development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Project Lifecycle Integration */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Project Lifecycle Integration
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              We provide targeted assistance at every stage of your project lifecycle. Engaging with the Help Desk at the appropriate stage maximizes efficiency and minimizes delays.
            </p>
          </motion.div>

          <div className="space-y-8">
            {projectStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${stage.gradient} p-5 flex-shrink-0`}>
                    <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {stage.stage}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {stage.assistance}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Operating Hours */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Operating Hours & Key Information
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our support staff are available during the following hours. The online ticketing system is available 24/7 for request submission.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-8 rounded-3xl text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 mx-auto mb-6">
                <Calendar className="w-full h-full text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Standard Operating Hours
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Monday to Friday, 9:00 AM – 5:00 PM
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-3xl text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-teal-500 p-4 mx-auto mb-6">
                <Clock className="w-full h-full text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ticket System Availability
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                24/7
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-2xl"
          >
            <h4 className="text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-2">
              Important Note:
            </h4>
            <p className="text-yellow-700 dark:text-yellow-300">
              The Help Desk provides technical and procedural support; it does not offer academic project management or final scope approval. Academic decisions and project ownership remain with the student and faculty guide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Feedback */}
      <section className="py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Feedback & Service Improvement
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              We are committed to continuous improvement of our support services. Your professional feedback is vital to maintaining high standards of assistance.
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-lg">
              Provide Feedback
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}