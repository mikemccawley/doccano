<template>
  <v-row v-if="rprts">
    <v-col
      cols="12"
      lg="4"
    >
      <v-card>
        <doughnut-chart
          :chart-data="progress"
        />
      </v-card>
    </v-col>
    <v-col
      cols="12"
      lg="4"
    >
      <v-card>
        <bar-chart
          :chart-data="labelStats"
        />
      </v-card>
    </v-col>
    <v-col
      cols="12"
      lg="4"
    >
      <v-card>
        <bar-chart
          :chart-data="userStats"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import DoughnutChart from '@/components/molecules/DoughnutChart'
import BarChart from '@/components/molecules/BarChart'

export default {
  layout: 'project',

  components: {
    DoughnutChart,
    BarChart
  },

  computed: {
    ...mapGetters('reports', ['userStats', 'labelStats', 'progress']),
    ...mapState('reports', ['rprts'])
  },

  async created() {
    await this.fetchReports({
      projectId: this.$route.params.id
    })
  },

  methods: {
    ...mapActions('reports', ['fetchReports'])
  },

  validate({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>
