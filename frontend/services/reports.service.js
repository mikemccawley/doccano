import ApiService from '@/services/api.service'

class ReportsService {
  constructor() {
    this.request = ApiService
  }

  getReports({ projectId }) {
    return this.request.get(`/projects/${projectId}/reports`)
  }
}

export default new ReportsService()
