require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    return @column if @column 
    col = DBConnection.execute2(<<-SQL).first
      SELECT *
      FROM #{self.table_name}
    SQL
    col.map! {|ele| ele.to_sym}
    @column = col 
  end

  def self.finalize!
    columns.each do |column|
      define_method(column) do
        self.attributes[column]
      end

      define_method("#{column}=") do |value|
        self.attributes[column] = value
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name 
  end

  def self.table_name
    if @table_name != nil
      @table_name
    else 
      self.name.downcase.pluralize
    end
  end

  def self.all
    results = DBConnection.execute(<<-SQL)
      SELECT *
      FROM #{self.table_name}
    SQL

    parse_all(results)
  end

  def self.parse_all(results)
    results.map {|result| self.new(result)}
  end

  def self.find(id)
    self.all.find { |obj| obj.id == id }
  end

  def initialize(params = {})
    params.each do |attr_name, value|
      attr_name = attr_name.to_sym
      if !self.class.columns.include?(attr_name)
        raise "unknown attribute '#{attr_name}'"
      else 
        self.send("#{attr_name}=", value)
      end
    end
  end

  def attributes
    if @attributes
      return @attributes
    else  
      @attributes = {}
    end
  end

  def attribute_values
    self.class.columns.map{|name| self.send(name)}
  end

  def insert
    cols = self.class.columns.drop(1)
    cols.map{|col| col.to_s}
    col_names = cols.join(', ')
    question_marks = (["?"] * cols.length).join(", ")
    DBConnection.execute(<<-SQL, *attribute_values.drop(1))
      INSERT INTO 
        #{self.class.table_name} (#{col_names})
      VALUES
        (#{question_marks})
    SQL
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
