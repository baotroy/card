<div class="main-container">
	<div>
		<button id="btnSave" type="button">Save</button>
	</div>

	<div id="canvas">
		<img id="main" src="<?php echo $this->base.'/img/1.jpg' ?>" alt="">
		<div id="quotes">
			Your quote here
		</div>
	</div>
	<div id="tool">
		<ul>
			<li>
				<span id="editQuoteIcon" class="glyphicon glyphicon-pencil" aria-hidden="true" data-toggle="modal" data-target="#quotesModal"></span>
			</li>
			<li>
				<span id="uploadIcon" class="glyphicon glyphicon-picture" aria-hidden="true"></span>
				<input type="file" id="upload">
			</li>
			<li>
				<span class="glyphicon glyphicon-font" aria-hidden="true"></span>
			</li>
		</ul>
	</div>
	<div id="img-out"></div>
</div>


<div id="quotesModal" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Edit quotes</h4>
      </div>
      <div class="modal-body">
        <textarea id="editQuotes" class="form-control"></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" id="saveQuotes" class="btn btn-success" data-dismiss="modal">Save</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>