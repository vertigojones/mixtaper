class Api::CommentsController < ApplicationController
    def index
        @mixtape = Mixtape.find(params[:mixtape_id])
        @comments = @mixtape.comments
        render json: {
          comments: @comments
        }
      end
    
      def show
        @comment = Comment.find(params[:id])
        render json: {
          comment: @comment
        }
      end
    
      def create
        @mixtape = Mixtape.find(params[:mixtape_id])
        @comment = @mixtape.comments.create(comment_params)
        render json: {
          comment: @comment
        }
      end
    
      def update
        @mixtape = Mixtape.find(params[:mixtape_id])
        @comment = @mixtape.comments.find(params[:id])
        @comment.update!(comment_params)
        render json: {
          comment: @comment
        }
      end
    
      def destroy
        Comment.find(params[:id]).destroy
    
        render json: {
          message: "Comment successfully destroyed"
        }
      end
    
      private
    
      def comment_params
        params.require(:comment).permit(:post, :posted_by)
      end
end
