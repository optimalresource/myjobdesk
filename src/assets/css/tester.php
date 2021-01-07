<?php
class Peter {
    // Fetch all incidents on staff ------------------------------------------------------------------------------------------------------
    public function viewIncidentTasks() {
        $limit = $this->validateParameters('limit', $this->param['limit'], INTEGER, FALSE);
        $page = $this->validateParameters('page', $this->param['page'], INTEGER, FALSE);
        $state = $this->validateParameters('state', $this->param['state'], STRING, FALSE);

        try{
            $classhandle = new Task;
            $classhandle->limit = $limit;
            $classhandle->page = $page;
            $classhandle->state = $state;
            $result = $classhandle->IncidentTasks();
            
            if (is_string($result))
            {
                $activity = $this->user_name_c . ' failed to view all incident tasks, because there was a query error';
                $type = VIEW;
                $tableAffected = 'task';
                $this->recordActivity($activity, $type, $tableAffected);
                $this->returnResponse(INTERNAL_SERVER_ERROR, $result);
            }else if(is_array($result)){
                if(array_key_exists('code', $result)) {
                    if($result['code'] == DOES_NOT_EXIST) {
                        $activity = $this->user_name_c . ' failed to view all incident tasks, because none exist';
                        $type = VIEW;
                        $tableAffected = 'task';
                        $this->recordActivity($activity, $type, $tableAffected);
                        $this->returnResponse($result['code'], $result['message']);
                    }
                }
                $activity = $this->user_name_c . ' viewed all incident tasks';
                $type = VIEW;
                $tableAffected = 'task';
                $this->recordActivity($activity, $type, $tableAffected);
                $this->returnResponse(SUCCESS_RESPONSE, $result); 
            }else {
                $activity = $this->user_name_c . ' failed to view all incident tasks';
                $type = VIEW;
                $tableAffected = 'task';
                $this->recordActivity($activity, $type, $tableAffected);
                $this->returnResponse(INTERNAL_SERVER_ERROR, $result);
            }
        }
        catch(Exception $e){
            $activity = $this->user_name_c . ' failed to view all incident tasks, because ' . $e->getMessage();
            $type = VIEW;
            $tableAffected = 'task';
            $this->recordActivity($activity, $type, $tableAffected);
            $this->returnResponse(INTERNAL_SERVER_ERROR, $e->getMessage());
        }
    }

    // Fetch all escorts on supervisor ------------------------------------------------------------------------------------------------------
    public function viewEscortTasks() {
        $limit = $this->validateParameters('limit', $this->param['limit'], INTEGER, FALSE);
        $page = $this->validateParameters('page', $this->param['page'], INTEGER, FALSE);
        $state = $this->validateParameters('state', $this->param['state'], STRING, FALSE);

        try{
            $classhandle = new Task;
            $classhandle->limit = $limit;
            $classhandle->page = $page;
            $classhandle->state = $state;
            $result = $classhandle->escortTasks();
            
            if (is_string($result))
            {
                $activity = $this->user_name_c . ' failed to view all escort tasks, because there was a query error';
                $type = VIEW;
                $tableAffected = 'task';
                $this->recordActivity($activity, $type, $tableAffected);
                $this->returnResponse(INTERNAL_SERVER_ERROR, $result);
            }else if(is_array($result)){
                if(array_key_exists('code', $result)) {
                    if($result['code'] == DOES_NOT_EXIST) {
                        $activity = $this->user_name_c . ' failed to view all escort tasks, because none exist';
                        $type = VIEW;
                        $tableAffected = 'task';
                        $this->recordActivity($activity, $type, $tableAffected);
                        $this->returnResponse($result['code'], $result['message']);
                    }
                }
                $activity = $this->user_name_c . ' viewed all escort tasks';
                $type = VIEW;
                $tableAffected = 'task';
                $this->recordActivity($activity, $type, $tableAffected);
                $this->returnResponse(SUCCESS_RESPONSE, $result); 
            }else {
                $activity = $this->user_name_c . ' failed to view all escort tasks';
                $type = VIEW;
                $tableAffected = 'task';
                $this->recordActivity($activity, $type, $tableAffected);
                $this->returnResponse(INTERNAL_SERVER_ERROR, $result);
            }
        }
        catch(Exception $e){
            $activity = $this->user_name_c . ' failed to view all escort tasks, because ' . $e->getMessage();
            $type = VIEW;
            $tableAffected = 'task';
            $this->recordActivity($activity, $type, $tableAffected);
            $this->returnResponse(INTERNAL_SERVER_ERROR, $e->getMessage());
        }
    }

    // Fetch all escorts on supervisor ------------------------------------------------------------------------------------------------------
    public function viewAllTasks() {
        $limit = $this->validateParameters('limit', $this->param['limit'], INTEGER, FALSE);
        $page = $this->validateParameters('page', $this->param['page'], INTEGER, FALSE);
        $state = $this->validateParameters('state', $this->param['state'], STRING, FALSE);

        try{
            $classhandle = new Task;
            $classhandle->limit = $limit;
            $classhandle->page = $page;
            $classhandle->state = $state;
            $result = $classhandle->allTaskStats();
            
            if (is_string($result))
            {
                $activity = $this->user_name_c . ' failed to view all tasks, because there was a query error';
                $type = VIEW;
                $tableAffected = 'task';
                $this->recordActivity($activity, $type, $tableAffected);
                $this->returnResponse(INTERNAL_SERVER_ERROR, $result);
            }else if(is_array($result)){
                if(array_key_exists('code', $result)) {
                    if($result['code'] == DOES_NOT_EXIST) {
                        $activity = $this->user_name_c . ' failed to view all tasks, because none exist';
                        $type = VIEW;
                        $tableAffected = 'task';
                        $this->recordActivity($activity, $type, $tableAffected);
                        $this->returnResponse($result['code'], $result['message']);
                    }
                }
                $activity = $this->user_name_c . ' viewed all tasks';
                $type = VIEW;
                $tableAffected = 'task';
                $this->recordActivity($activity, $type, $tableAffected);
                $this->returnResponse(SUCCESS_RESPONSE, $result); 
            }else {
                $activity = $this->user_name_c . ' failed to view all tasks';
                $type = VIEW;
                $tableAffected = 'task';
                $this->recordActivity($activity, $type, $tableAffected);
                $this->returnResponse(INTERNAL_SERVER_ERROR, $result);
            }
        }
        catch(Exception $e){
            $activity = $this->user_name_c . ' failed to view all tasks, because ' . $e->getMessage();
            $type = VIEW;
            $tableAffected = 'task';
            $this->recordActivity($activity, $type, $tableAffected);
            $this->returnResponse(INTERNAL_SERVER_ERROR, $e->getMessage());
        }
    }


}

?>