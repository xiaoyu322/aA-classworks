class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    @store[key] << key
  end

  def include?(key)
    self[key.hash % @store.length].include?(key)
  end

  def remove(key)
  end

  private

  def [](num)
    @store[num.hash % num_buckets] 
  end

  def num_buckets
    @store.length
  end

  def resize!
  end
end
