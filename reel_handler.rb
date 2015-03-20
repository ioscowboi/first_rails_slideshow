
class Reel_Handler
  attr_accessor :id, :title, :body
  
  def initialize(options)
    @id     = options["id"]
    @title  = options["title"]
    @body   = options["body"]
  end
  
  def self.next_slide(id)
    DATABASE.execute("SELECT * FROM slides WHERE id = #{id}")
  end
  
  def prev_slide
    image = DATABASE.execute("SELECT * FROM slides WHERE id = #{id}")
  end
  
  def self.all
    result = DATABASE.execute("SELECT * FROM slides")
    result.map { |x|
      self.new(x)
      } 
  end
  
  def to_hash
    {
      id: id,
      title: title,
      body: body
    }
  end
end