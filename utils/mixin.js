import { mapState, mapMutations } from 'vuex'
import { QUIZZ_TYPE } from '@/utils/constants'

export default {
  data () {
    return {
      isMobileScreenSize: false
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    ...mapMutations(['setLoading']),
    ...mapMutations('numbers', ['setVoiceSpeed']),

    onResize () {
      this.isMobileScreenSize = window.innerWidth < 1200
    },
    removeSpaces (str) {
      return str.replace(/ /g, '')
    }
  },
  computed: {
    ...mapState('numbers', ['quizzType', 'voiceSpeed']),
    ...mapState(['loadingResults']),
    isWrittenQuizzType () {
      return this.quizzType === QUIZZ_TYPE.WRITTEN
    },
    isListeningQuizzType () {
      return this.quizzType === QUIZZ_TYPE.LISTENING
    }
  }
}