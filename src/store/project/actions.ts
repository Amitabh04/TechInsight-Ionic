import { api } from '@/services';
import { ActionTree } from 'vuex';
import IProjectState, { IProject } from '@/models/IProject';
import { PROJECT_MUTATIONS } from '../project/mutations';


export const enum PROJECT_ACTIONS { 
    PROJECT_GET = 'PROJECT_GET', 
}

export const projectActions: ActionTree<{ project: IProjectState }, any> = {
 async [PROJECT_ACTIONS.PROJECT_GET](store) {
      try {
          const { data }: { data: IProject } = await api.project.getProjects()

          console.log('Project List Data', data);
          
          store.commit(PROJECT_MUTATIONS.PROJECT_SET, data)
      } catch (e) {
        // catch
        
      }    
  },
};