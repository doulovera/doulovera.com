type LinkObject = {
  name: string
  url: string
  icon: string
}

export const RESUME: LinkObject = {
  name: "Resume",
  url: "https://drive.google.com/file/d/1iiSZcfrbAfsxVZQRz7VAvkya2BZGpA1q/view",
  icon: "ph:download-simple",
} as const

export const SOCIAL_LINKS: LinkObject[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/douglaslovera/",
    icon: "ph:linkedin-logo",
  },
  {
    name: "GitHub",
    url: "https://github.com/doulovera/",
    icon: "ph:github-logo",
  },
]
