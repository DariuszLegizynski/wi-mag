<template>
  <AboutUs />
  <Team />
  <CompanyHistory />
</template>

<script>
import AboutUs from '@/components/about/AboutUs'
import Team from '@/components/about/Team'
import CompanyHistory from '@/components/about/CompanyHistory'

export default {
  name: 'App',
  components: {
    AboutUs,
    Team,
    CompanyHistory,
  }
}
</script>
