require "sinatra"
require 'json'
require "sqlite3"
require "pry"
require "rubygems"

require "sinatra/activerecord"

DATABASE = SQLite3::Database.new("slidereel.db")
DATABASE.results_as_hash = true

require_relative "reel_handler.rb"

# establish database connection: 
set :database, {adapter: "sqlite3", database: "slidereel.db"}

get "/update/:id" do
  new_slide_num = params[:id].to_i
  @slides = Slide.all
  next_slide_hash = @slides[new_slide_num]
  json_slide_to_display = next_slide_hash.to_json
end

get "/" do
  @slides = Slide.all
    @total_slides = @slides.length
    json_slides = @slides
    erb :homepage
end
