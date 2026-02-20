interface Story {
    id: string
    userId: string
    imageUrl: string
    views: { userId: string }[]
  }

  const grouped = stories.reduce((acc, story) => {
    if (!acc[story.userId]) {
      acc[story.userId] = []
    }
    acc[story.userId].push(story)
    return acc
  }, {} as Record<string, Story[]>)
  