class MaxIntSet
  attr_reader :max, :store
  def initialize(max)
    @max = max
    @store = Array.new(max, false)
  end

  def insert(num)
    if num < max && num >= 0
      @store[num] = true
      # return true
    else
      raise "Out of bounds"
    end
  end

  def remove(num)
    @store[num] = false
  end

  def include?(num)
    @store[num]
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  attr_reader :store
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self.store[num % 20] << num
  end

  def remove(num)
    self.store[num % 20].delete(num)
  end

  def include?(num)
    return true if self.store[num%20].include?(num)
    return false 
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count, :store

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    if !self.store[num % num_buckets].include?(num)
      self.store[num % num_buckets] << num
      @count +=1
      if count > num_buckets
        resize!
      end
    end
    
  end

  def remove(num)
    if self.store[num % num_buckets].include?(num)
      self.store[num % num_buckets].delete(num)
      @count -=1
    end
  end

  def include?(num)
    return true if self.store[num % num_buckets].include?(num)
    return false 
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
    prev_store = @store.flatten
      num_buckets.times do
       @store << []
      end
      prev_store.each do |ele|
        @store[ele % num_buckets] << ele
      end
  end
end
