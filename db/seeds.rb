Mixtape.destroy_all
Song.destroy_all

grunge = Mixtape.create!({
    title: "Grunge Mix",
    created_by: "Kurt's Biggest Fan",
    created_for: "My 'In Bloom'",
    dedication: "Thought you would appreciate this mix, to remind you of when we first met!",
    player_url: "spotify:user:owenliversidge:playlist:3iH9QdPF1F3J1EIvsJ1avn"
})

grunge.songs.create!(artist: "Nirvana", title: "In Bloom", length: 4.15)
grunge.songs.create!(artist: "Stone Temple Pilots", title: "Plush", length: 5.14)
grunge.songs.create!(artist: "Soundgarden", title: "Spoonman", length: 4.07)
grunge.songs.create!(artist: "Alice In Chains", title: "Man In The Box", length: 4.44)
grunge.songs.create!(artist: "Pearl Jam", title: "Alive", length: 5.41)
grunge.songs.create!(artist: "Silverchair", title: "Tomorrow", length: 4.26)
grunge.songs.create!(artist: "Screaming Trees", title: "Nearly Lost You", length: 4.07)
grunge.songs.create!(artist: "Melvins", title: "Honey Bucket", length: 3.01)
grunge.songs.create!(artist: "Live", title: "Lightning Crashes", length: 5.26)
grunge.songs.create!(artist: "L7", title: "Pretend We're Dead", length: 3.55)
grunge.songs.create!(artist: "Helmet", title: "Unsung", length: 3.58)
grunge.songs.create!(artist: "Hole", title: "Celebrity Skin", length: 2.42)
grunge.songs.create!(artist: "Temple Of The Dog", title: "Hunger Strike", length: 4.06)
grunge.songs.create!(artist: "Mudhoney", title: "Pump It Up", length: 3.10)
grunge.songs.create!(artist: "Pixies", title: "Where Is My Mind?", length: 3.51)
grunge.songs.create!(artist: "Dinosaur Jr", title: "Feel The Pain", length: 4.20)

eighties_rock = Mixtape.create!({
    title: "80's Rock",
    created_by: "Vince Neil's Hair",
    created_for: "My High School Crush",
    dedication: "It wasn't me ... I swear!",
    player_url: "spotify:user:owenliversidge:playlist:2Pv6CMGmk1xnX1JxPJDy98"
})

eighties_rock.songs.create!(artist: "Guns N' Roses", title: "Sweet Child O' Mine", length: 5.56)
eighties_rock.songs.create!(artist: "Motley Crüe", title: "Home Sweet Home", length: 4.01)
eighties_rock.songs.create!(artist: "Skid Row", title: "Youth Gone Wild", length: 3.09)
eighties_rock.songs.create!(artist: "Bon Jovi", title: "Livin' On A Prayer", length: 4.09)
eighties_rock.songs.create!(artist: "Van Halen", title: "Jump", length: 4.02)
eighties_rock.songs.create!(artist: "Quiet Riot", title: "Cum On Feel The Noize", length: 4.51)
eighties_rock.songs.create!(artist: "Twisted Sister", title: "We're Not Gonna Take It", length: 3.39)
eighties_rock.songs.create!(artist: "Poison", title: "Every Rose Has Its Thorn", length: 4.20)
eighties_rock.songs.create!(artist: "Warrant", title: "Cherry Pie", length: 3.21)
eighties_rock.songs.create!(artist: "KISS", title: "Rock And Roll All Nite", length: 2.49)
eighties_rock.songs.create!(artist: "Alice Cooper", title: "Poison", length: 4.30)
eighties_rock.songs.create!(artist: "Great White", title: "Once Bitten Twice Shy", length: 5.23)
eighties_rock.songs.create!(artist: "Rainbow", title: "Since You Been Gone", length: 3.18)
eighties_rock.songs.create!(artist: "Whitesnake", title: "Here I Go Again", length: 4.39)
eighties_rock.songs.create!(artist: "Def Leppard", title: "Animal", length: 4.05)
eighties_rock.songs.create!(artist: "Scorpions", title: "Rock You Like A Hurricane", length: 4.13)


