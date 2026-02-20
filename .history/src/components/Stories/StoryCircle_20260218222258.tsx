const hasUnseen = stories.some(
    story => !story.views.find(v => v.userId === currentUser.id)
  )
  