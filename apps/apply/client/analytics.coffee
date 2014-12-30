{ track } = require '../../../lib/analytics.coffee'

module.exports = (router) ->
  { state, form } = router

  track.funnel 'Landed on partner application form', mode: state.get('mode')

  router.on 'route', (route) ->
    track.funnel 'Changed partner application route', route: route

  state.on 'change:mode', (state, mode) ->
    track.funnel 'Partner application mode changed', mode: mode

  state.on 'change:step', (state, step) ->
    track.funnel 'Partner application step changed', step: step

  state.on 'change:state', (state, value) ->
    track.funnel 'Submitted partner application form', state: value
