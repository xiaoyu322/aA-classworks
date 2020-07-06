def what_was_that_one_with(those_actors)
  # Find the movies starring all `those_actors` (an array of actor names).
  # Show each movie's title and id.
  Movie
    .joins(:actors)
    .where("actors.name IN (?)", those_actors)
    .group(:id)
    .having("COUNT(*) = ?", those_actors.length)
    .select(:title, :id)
end


def golden_age
  # Find the decade with the highest average movie score.
  Movie
    .group("(movies.yr / 10) * 10")
    .order("AVG(score) DESC")
    .limit(1)
    .pluck("((yr / 10) * 10) AS decade")[0]
end

def costars(name)
  # List the names of the actors that the named actor has ever
  # appeared with.
  # Hint: use a subquery
  movies_with_actor = Movie.joins(:actors).where("actors.name = ?", name).pluck(:id)
  
  Actor
    .joins(:movies)
    .where("movies.id IN (?)", movies_with_actor)
    .where("actors.name != ?", name)
    .pluck(:name).uniq

end

def actor_out_of_work
  # Find the number of actors in the database who have not appeared in a movie
  Actor
    .left_outer_joins(:movies)
    .where(movies: {title: nil})
    .pluck(:id).length
end

def starring(whazzername)
  # Find the movies with an actor who had a name like `whazzername`.
  # A name is like whazzername if the actor's name contains all of the
  # letters in whazzername, ignoring case, in order.

  # ex. "Sylvester Stallone" is like "sylvester" and "lester stone" but
  # not like "stallone sylvester" or "zylvester ztallone"
  Movie
    .joins(:actors)
    .where("actors.name LIKE '%' + ? + '%'", whazzername)
end

def longest_career
  # Find the 3 actors who had the longest careers
  # (the greatest time between first and last movie).
  # Order by actor names. Show each actor's id, name, and the length of
  # their career.

end
