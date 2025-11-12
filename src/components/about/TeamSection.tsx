import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, Github } from 'lucide-react'

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image: string
  email: string
  linkedin?: string
  twitter?: string
  github?: string
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Kevin",
      role: "CTO (Non-profit) & Lead Developer, SummitPixels",
      bio: "Kevin began programming in high school, building a foundation across Turing, Java, MySQL, HTML, and CSS. In 2013, he started his professional career as an Information Technology Consultant at Scotiabank and has continuously grown his expertise since then. Today, he serves as Chief Technology Officer for a non-profit organization and leads development for SummitPixels and other projects.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFUgDZE2mHeWw/profile-displayphoto-shrink_800_800/B56ZZO13M9GoAc-/0/1745079466879?e=1764201600&v=beta&t=DTEtG2WTFFbh5xmtxUUBoG2scAl6iQwzBLsT4w40QAo",
      email: "hello@summitpixels.com",
      linkedin: "https://www.linkedin.com/in/kevin046/"
    }
  ]

  const yearsExperience = new Date().getFullYear() - 2013

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SummitPixels is currently led by a single team member. Connect to learn more and collaborate on projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover shadow-lg"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-gray-800 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                    
                    <div className="flex items-center space-x-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          className="text-gray-400 hover:text-gray-800 transition-colors"
                          aria-label="LinkedIn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hover:text-gray-800 transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          className="text-gray-400 hover:text-gray-800 transition-colors"
                          aria-label="Twitter"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          className="text-gray-400 hover:text-gray-900 transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-gray-900 to-gray-700 rounded-3xl p-8 text-white"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">1</div>
                <div className="text-gray-200">Team Member</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">{yearsExperience}+</div>
                <div className="text-gray-200">Years Experience (since 2013)</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2</div>
                <div className="text-gray-200">Active Roles</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-gray-200">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Connect CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect on LinkedIn</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              For professional inquiries and collaboration, please reach out via LinkedIn.
            </p>
            <a
              href="https://www.linkedin.com/in/kevin046/"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              View LinkedIn Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection