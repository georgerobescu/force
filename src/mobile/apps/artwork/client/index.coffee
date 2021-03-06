ArtworkImageView = require '../components/image/view.coffee'
artworkTabsView = require '../components/tabs/index.coffee'
bootstrap = require '../../../components/layout/bootstrap.coffee'
CurrentUser = require '../../../models/current_user.coffee'
MetaDataView = require '../components/meta_data/view.coffee'
BidView = require '../components/bid/view.coffee'
ArtworkPartnerView = require '../components/partner/view.coffee'
Artwork = require '../../../models/artwork.coffee'
Artworks = require '../../../collections/artworks.coffee'
fetchArtworkBuckets = require '../components/related_artworks/index.coffee'
{ recordArtworkView } = require '../../../../lib/components/record_artwork_view'
{ enableIntercom } = require '../../../../lib/intercom'

module.exports.init = ->
  bootstrap()
  artworkTabsView()
  artwork = new Artwork sd.ARTWORK
  user = CurrentUser.orNull()
  user.initializeDefaultArtworkCollection() if user
  recordArtworkView(sd.ARTWORK._id, user)
  enableIntercom(sd.ARTWORK)

  new ArtworkImageView
    artwork: sd.ARTWORK
    el: $ 'body'
    user: user

  new MetaDataView
    model: artwork
    el: $('.artwork-meta-data-module')

  new BidView
    artwork: sd.ARTWORK
    el: $('.artwork-auction-bid-module')
    user: user

  new ArtworkPartnerView
    artwork: sd.ARTWORK
    el: $('.artwork-partner-module')

  fetchArtworkBuckets()
