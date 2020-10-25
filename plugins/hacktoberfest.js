import hacktoberfestConfig from '../hacktoberfest.config'

const now = new Date()

const hacktoberfest = {
  ...hacktoberfestConfig,
  started: () => {
    const startDate = new Date(hacktoberfestConfig.start)

    return startDate.getTime() < now.getTime()
  },
  ended: () => {
    const endDate = new Date(hacktoberfestConfig.end)

    return endDate.getTime() < now.getTime()
  },
}

export default (context, inject) => {
  inject('hacktoberfest', hacktoberfest)
}
