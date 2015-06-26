# Centralizes configuration for currently running split tests
#
# eg.
# header_design:
#   key: 'header_design'
#   outcomes:
#     old: 0.8
#     new: 0.2
#   edge: 'new'
#   dimension: 'dimension1' # Optional GA dimension
#   scope: 'local' # Optionally disable global initialization
#
# Note: if there are no running tests
# this should export empty Object
# module.exports = {}

module.exports =

  posts_section_name:
    key: 'posts_section_name'
    outcomes:
      magazine: 4/5
      editorial: 1/5

  homepage_contents:
    key: 'homepage_contents'
    outcomes:
      featured: 0.5
      artworks: 0.5
    edge: 'artworks'
    dimension: 'dimension6'
