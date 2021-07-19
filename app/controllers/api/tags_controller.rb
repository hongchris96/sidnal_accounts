class Api::TagsController < ApplicationController
  def index
    @tags = Accounts.find_by(id: params[:current_account_id]).tags
    render :index
  end

  def show
    @tag = Tag.find_by(id: params[:id])
    render :show
  end

  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 401
    end
  end

  def destroy
    @tag = Tag.find_by(id: params[:id])
    if @tag
      @tag.destroy
      render :show
    else
      render json: ['Tag not found'], status: 404
    end
  end

  private
  def tag_params
    params.require(:tag).permit(:current_account_id, :tag_name)
  end
end
