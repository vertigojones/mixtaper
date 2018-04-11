Mixtape.destroy_all
Song.destroy_all

grunge = Mixtape.create!({
    title: "Grunge Mix",
    created_by: "Kurt's Biggest Fan",
    created_for: "My 'In Bloom'",
    dedication: "Thought you would appreciate this mix, to remind you of when we first met!"
    songs: [
        Song.new(artist: "Nirvana", title: "In Bloom", length: 4.15),
        Song.new(artist: "Stone Temple Pilots", title: "Plush", length: 5.14),
        Song.new(artist: "Soundgarden", title: "Spoonman", length: 4.07),
        Song.new(artist: "Alice in Chains", title: "Man in the Box", length: 4.44),
        Song.new(artist: "Pearl Jam", title: "Alive", length: 5.41),
        Song.new(artist: "Silverchair", title: "Tomorrow", length: 4.26),
        Song.new(artist: "Screaming Trees", title: "Nearly Lost You", length: 4.07),
        Song.new(artist: "Melvins", title: "Honey Bucket", length: 3.01),
        Song.new(artist: "Live", title: "Lightning Crashes", length: 5.26),
        Song.new(artist: "L7", title: "Pretend We're Dead", length: 3.55),
        Song.new(artist: "Helmet", title: "Unsung", length: 3.58),
        Song.new(artist: "Hole", title: "Celebrity Skin", length: 2.42),
        Song.new(artist: "Temple of the Dog", title: "Hunger Strike", length: 4.06),
        Song.new(artist: "Mudhoney", title: "Pump it Up", length: 3.10),
        Song.new(artist: "Pixies", title: "Where is My Mind?", length: 3.51),
        Song.new(artist: "Dinosaur Jr", title: "Feel the Pain", length: 4.20)
    ]
})

eighties_rock = Mixtape.create!({
    title: "80's Rock",
    created_by: "Vince Neil's Hair",
    created_for: "My High School Crush",
    dedication: "It wasn't me ... I swear!"
})


