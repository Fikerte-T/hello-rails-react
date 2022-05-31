class V1::GreetingsController < ApplicationController
    def index
        render json: {:greetings => [
            {
                :name => 'something',
                :guid => '129383sdhfkadbf'
            },
            {
                :name => 'something else',
                :guid => 'ftgsrtyw456346'
            }
        ] }.to_json
    end
end